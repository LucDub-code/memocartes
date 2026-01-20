"use client"

import { useState, useEffect, useRef } from "react" 

export default function CardMenu() {

  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {                                                                                  
      function handleClickOutside(event: MouseEvent) {                                                 
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {                      
          setIsOpen(false)                                                                             
        }                                                                                              
      } if (isOpen) {                                                                                    
        document.addEventListener("click", handleClickOutside)                                         
      } return () => {                                                                                   
        document.removeEventListener("click", handleClickOutside)                                      
      }                                                                                                
    }, [isOpen])

  return (
    <div ref={menuRef} className="relative flex items-center h-full pl-4 border-l border-ink shadow-menu">
      <button 
        className={`cursor-pointer border rounded-sm ${isOpen ? "border-ink shadow-[2px_2px_0_var(--ink)]" : "border-transparent hover:border-ink hover:rounded-sm hover:shadow-[2px_2px_0_var(--ink)]"}`} 
        aria-label="Menu de la carte" 
        aria-haspopup="menu"
        aria-expanded={isOpen}                                                                       
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/icons/icon-menu.svg" alt="" className="w-6" />
      </button>
      {isOpen && (
        <menu role="menu" className="absolute bottom-15 -right-3.5 border rounded-lg border-ink list-none">
          <li role="menuitem">
            <button className="flex items-center w-full gap-1 py-2 pl-4 pr-8 bg-white border-b rounded-t-lg cursor-pointer text-preset-5 hover:bg-background border-ink">
              <img src="/icons/icon-edit.svg" alt="" className="w-4" />
              Modifier
            </button>
          </li>
          <li role="menuitem">
            <button className="flex items-center w-full gap-1 py-2 pl-4 pr-8 bg-white rounded-b-lg cursor-pointer text-preset-5 hover:bg-background">
              <img src="/icons/icon-delete.svg" alt="" className="w-4" />
              Supprimer
            </button>
          </li>
        </menu>
      )}
    </div>
  )
}