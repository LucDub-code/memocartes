"use client"

import { useState, useEffect } from "react"

export default function StudyCard() {

  const [isFlipped, setIsFlipped] = useState(false)
  const [displayedContent, setDisplayedContent] = useState({
    title: "Question",
    subtitle: "Cliquez pour révéler la réponse"
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedContent(isFlipped
        ? { title: "Réponse", subtitle: "Réponse:" }
        : { title: "Question", subtitle: "Cliquez pour révéler la réponse" }
      )
    }, 50)
    return () => clearTimeout(timer)
  }, [isFlipped])

  return (
    <button
      type="button"
      onClick={() => setIsFlipped(!isFlipped)}
      className={`relative flex flex-col items-center justify-between p-6 mb-5 border shadow-lg cursor-pointer w-194 h-90 border-ink rounded-2xl transition-colors duration-300 ${isFlipped ? 'bg-light-blue' : 'bg-pink'}`}
    >
      <span className="px-3 py-1 bg-white border rounded-full shadow-sm border-ink w-fit text-preset-6">Catégorie</span>
      <div className={`flex flex-col items-center transition-all duration-300 ${isFlipped ? 'gap-0' : 'gap-4'}`}>
        <p className={`transition-all duration-300 ease-bounce ${isFlipped ? 'translate-y-8 text-preset-2' : 'translate-y-0 text-preset-1'}`}>
          {displayedContent.title}
        </p>
        <p className={`text-preset-4-medium text-ink/80 transition-all duration-300 ease-bounce ${isFlipped ? '-translate-y-8' : 'translate-y-0'}`}>
          {displayedContent.subtitle}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 overflow-hidden bg-white border rounded-full w-15 border-ink">
          <div
            className="h-full transition-all duration-300 ease-out rounded-full bg-teal"
            style={{ width: `${(2 / 5) * 100}%` }}
          />
        </div>
        <span className="text-preset-6">0/5</span>
      </div>
      <img
        src={isFlipped ? "/icons/pattern-star-pink.svg" : "/icons/pattern-star-blue.svg"}
        alt=""
        className={`absolute w-6 transition-all duration-300 top-10 left-180`}
      />
      <img
        src="/icons/pattern-star-yellow.svg"
        alt=""
        className={`absolute w-6 top-66 left-7 transition-all duration-300`}
      />
    </button>
  )
}