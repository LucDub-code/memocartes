"use client"

import { useState, useEffect, useRef } from "react"
import { useAnimate } from "motion/react"

import useCardStore from "@/app/stores/cardStore"

interface StudyCardProps {
  question: string
  answer: string
  category: string
  mastery_level: number
}

export default function StudyCard({ question, answer, category, mastery_level }: StudyCardProps) {

  const { isFlipped, setIsFlipped } = useCardStore()
  const [displayedContent, setDisplayedContent] = useState({
    title: question,
    subtitle: "Cliquez pour révéler la réponse"
  })
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedContent(isFlipped
        ? { title: answer, subtitle: "Réponse:" }
        : { title: question, subtitle: "Cliquez pour révéler la réponse" }
      )
    }, 50)
    return () => clearTimeout(timer)
  }, [isFlipped, question, answer])

  const handleClick = () => {
    setIsFlipped(!isFlipped)

    animate(".animate-blue-pink-star", {
      top: ["11%", "22%", "11%"],
      left: ["93%", "72%", "93%"],
    }, { duration: 0.35, ease: "backOut" })

    animate(".animate-yellow-star", {
      top: ["73%", "72%", "73%"],
      left: ["4%", "22%", "4%"],
    }, { duration: 0.35, ease: "backOut" })
  }

  const titleRef = useRef<HTMLParagraphElement>(null)
  const [titleHeight, setTitleHeight] = useState(0)

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.offsetHeight)
    }
  }, [displayedContent.title])

  return (
    <button
      type="button"
      ref={scope}
      onClick={handleClick}
      aria-label={isFlipped ? "Cliquer pour revoir la question" : "Cliquer pour révéler la réponse"}
      className={`relative flex flex-col items-center justify-between p-6 mb-5 border shadow-large cursor-pointer lg:max-w-194 w-full h-90 border-ink rounded-2xl transition-colors duration-300 ${isFlipped ? 'bg-light-blue' : 'bg-pink'}`}
    >
      <span className="px-3 py-1 bg-white border rounded-full shadow-small border-ink w-fit text-preset-6">{category}</span>
      <div className={`flex flex-col items-center transition-all duration-300 ${isFlipped ? 'gap-0' : 'gap-4'}`}>
        <p ref={titleRef} className={`max-w-[20ch] transition-all duration-300 ease-bounce ${isFlipped ? 'translate-y-8 text-preset-2' : 'translate-y-0 text-preset-1-mobile sm:text-preset-1-tablet lg:text-preset-1'}`}>
          {displayedContent.title}
        </p>
        <p
          className="text-preset-4-medium text-ink/80 transition-all duration-300 ease-bounce"
          style={{ transform: isFlipped ? `translateY(-${titleHeight + 16}px)` : 'translateY(0)' }}
        >
          {displayedContent.subtitle}
        </p>
      </div>
      <div className="flex items-center h-4 gap-2">
        {mastery_level < 5 && (
          <div className="h-2 overflow-hidden bg-white border rounded-full w-15 border-ink">
            <div
              className="h-full transition-all duration-300 ease-out rounded-full bg-teal"
              style={{ width: `${(mastery_level / 5) * 100}%` }}
            />
          </div>
        )}
        {mastery_level === 5 ? (
          <span className="flex items-center gap-1 px-3 py-1 border rounded-full bg-teal shadow-small border-ink w-fit text-preset-6">
            <img src="/icons/icon-mastered.svg" alt="" />
            Mémorisée 5/5
          </span>
        ) : (
          <span className="text-preset-6">{mastery_level}/5</span>
        )}
      </div>
      <img
        src={isFlipped ? "/icons/pattern-star-pink.svg" : "/icons/pattern-star-blue.svg"}
        alt=""
        className="absolute w-6 animate-blue-pink-star left-[93%] top-[11%] -translate-x-1/2"
      />
      <img
        src="/icons/pattern-star-yellow.svg"
        alt=""
        className="absolute w-6 animate-yellow-star left-[4%] top-[73%]"
      />
    </button>
  )
}