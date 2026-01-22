"use client"

import { useState } from "react"
import useToastStore from "@/app/stores/toastStore"

const inputBase =
  "p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]"
const inputError =
  "!border-crimson shadow-[2px_2px_0_var(--crimson)]"

export default function CardForm() {

  const { showToast } = useToastStore()

  const [errors, setErrors] = useState({
    question: "",
    answer: "",
    category: "",
  })

  const showErrors = () => {
    setErrors({
      question: "La question est obligatoire.",
      answer: "La réponse est obligatoire.",
      category: "La catégorie est obligatoire.",
    })
  }

  return (
    <form className="flex flex-col w-full p-5 bg-white border sm:p-6 lg:p-8 max-w-310 border-ink rounded-2xl strokes-lg">
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="question" className="text-preset-4-medium">Question</label>
        <input type="text" id="question" name="question" className={`${inputBase} ${errors.question ? inputError : ""}`} placeholder="Exemple : Quelle est la capitale de la France ?" required />
        {errors.question && 
          <div className="flex gap-2 items-center">
            <img src="/icons/icon-error.svg" alt="w-4" />
            <span className="text-crimson text-preset-5-regular">{errors.question}</span>
          </div>
        }
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="answer" className="text-preset-4-medium">Réponse</label>
        <textarea id="answer" name="answer" rows={2} className={`${inputBase} ${errors.answer ? inputError : ""} resize-none`} placeholder="Exemple : Paris" required />
        {errors.answer && 
          <div className="flex gap-2 items-center">
            <img src="/icons/icon-error.svg" alt="w-4" />
            <span className="text-crimson text-preset-5-regular">{errors.answer}</span>
          </div>
        }
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="category" className="text-preset-4-medium">Catégorie</label>
        <input type="text" id="category" name="category" className={`${inputBase} ${errors.category ? inputError : ""}`} placeholder="Géographie" required />
        {errors.category && 
          <div className="flex gap-2 items-center">
            <img src="/icons/icon-error.svg" alt="w-4" />
            <span className="text-crimson text-preset-5-regular">{errors.category}</span>
          </div>
        }
      </div>
      <button
        type="button"
        onClick={() => showToast("Carte créée avec succés.")}
        className="w-fit flex items-center justify-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
        <img src="/icons/icon-circle-plus.svg" alt="" className="w-4" />
        Créer une carte
      </button>
      {/* <button type="button" onClick={showErrors}>
        Tester les erreurs
      </button> */}
    </form>
  )
}