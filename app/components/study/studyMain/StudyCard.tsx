"use client"

import { useState, useEffect } from "react"
import { useAnimate } from "motion/react"

export default function StudyCard() {

  const [isFlipped, setIsFlipped] = useState(false)
  const [displayedContent, setDisplayedContent] = useState({
    title: "Question",
    subtitle: "Cliquez pour révéler la réponse"
  })
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedContent(isFlipped
        ? { title: "Réponse", subtitle: "Réponse:" }
        : { title: "Question", subtitle: "Cliquez pour révéler la réponse" }
      )
    }, 50)
    return () => clearTimeout(timer)
  }, [isFlipped])

  const handleClick = () => {
    setIsFlipped(!isFlipped)

    animate(".animate-blue-pink-star", {
      top: ["40px", "108px", "40px"],
      left: ["720px", "552px", "720px"]
    }, { duration: 0.35, ease: "backOut" })

    animate(".animate-yellow-star", {
      top: ["264px", "220px", "264px"],
      left: ["28px", "208px", "28px"]
    }, { duration: 0.35, ease: "backOut" })
  }

  return (
    <button
      type="button"
      ref={scope}
      onClick={handleClick}
      aria-label={isFlipped ? "Cliquer pour revoir la question" : "Cliquer pour révéler la réponse"}
      className={`relative flex flex-col items-center justify-between p-6 mb-5 border shadow-large cursor-pointer max-w-194 w-full h-90 border-ink rounded-2xl transition-colors duration-300 ${isFlipped ? 'bg-light-blue' : 'bg-pink'}`}
    >
      <span className="px-3 py-1 bg-white border rounded-full shadow-small border-ink w-fit text-preset-6">Catégorie</span>
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
        className="animate-blue-pink-star absolute w-6 top-10 left-180"
      />
      <img
        src="/icons/pattern-star-yellow.svg"
        alt=""
        className="animate-yellow-star absolute w-6 top-66 left-7"
      />
    </button>
  )
}