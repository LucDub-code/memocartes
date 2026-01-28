"use client"

import { useState, useEffect } from "react"
import useCardModalStore from "@/app/stores/cardModalStore"
import useToastStore from "@/app/stores/toastStore"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cardSchema, CardFormData } from "@/lib/card-schema"
import { API_ENDPOINTS } from "@/app/config/api"
import { DEFAULT_CATEGORIES } from "@/lib/categories"

const inputStyle = {
  base: "p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]",
  error: "!border-crimson shadow-[2px_2px_0_var(--crimson)]"
}

export default function CardEditModal() {

  const { closeModal, startLoading, stopLoading } = useCardModalStore()
  const { showToast } = useToastStore()

  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors: reactHookFormErrors },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: "onBlur",
    // TODO: pré-remplir avec les données de la carte quand le store passera cardData
    // defaultValues: { question: cardData.question, answer: cardData.answer, category: cardData.category }
  })

  const onSubmit = (data: CardFormData) => {
    startLoading()
    setSubmitError(null)

    // TODO: décommenter quand la route PUT et le cardId seront prêts
    // fetch(API_ENDPOINTS.UPDATE_CARD(cardId), {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    //   .then(response => {
    //     if (response.ok) return response.json()
    //     else return response.json().then(error => { throw new Error(error.message) })
    //   })
    //   .then(() => {
    //     closeModal()
    //     showToast("Carte modifiée avec succès.")
    //   })
    //   .catch((error) => {
    //     stopLoading()
    //     setSubmitError(error.message || "Erreur lors de la modification.")
    //   })
  }

  useEffect(() => {
    if (submitError) {
      showToast(submitError)
    }
  }, [submitError, showToast])

  return (
    <div
      className="relative w-full px-6 sm:px-8 py-8 bg-white max-w-150 rounded-2xl strokes-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        aria-label="Fermer la modal"
        className="absolute cursor-pointer top-[4%] left-[94%]"
      >
        <img src="/icons/icon-cross.svg" alt="" className="w-4" />
      </button>
      <h2 className="mb-5 text-preset-2" id="modal-title">Modifier la carte</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="edit-question" className="text-preset-4-medium">Question</label>
          <input
            type="text" id="edit-question"
            className={`${inputStyle.base} ${reactHookFormErrors.question ? inputStyle.error : ""}`}
            placeholder="Exemple : Quelle est la capitale de la France ?"
            required
            {...register("question")}
          />
          {reactHookFormErrors.question &&
            <div className="flex gap-2 items-center">
              <img src="/icons/icon-error.svg" alt="w-4" />
              <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.question.message}</span>
            </div>
          }
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="edit-answer" className="text-preset-4-medium">Réponse</label>
          <textarea
            id="edit-answer" rows={2}
            className={`${inputStyle.base} ${reactHookFormErrors.answer ? inputStyle.error : ""} resize-none`}
            placeholder="Exemple : Paris"
            required
            {...register("answer")}
          />
          {reactHookFormErrors.answer &&
            <div className="flex gap-2 items-center">
              <img src="/icons/icon-error.svg" alt="w-4" />
              <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.answer.message}</span>
            </div>
          }
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="edit-category" className="text-preset-4-medium">Catégorie</label>
          <select
            id="edit-category"
            className={`${inputStyle.base} ${reactHookFormErrors.category ? inputStyle.error : ""}`}
            defaultValue={""}
            required
            {...register("category")}
          >
            <option value="" disabled>Choisir une catégorie</option>
            {DEFAULT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {reactHookFormErrors.category &&
            <div className="flex gap-2 items-center">
              <img src="/icons/icon-error.svg" alt="w-4" />
              <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.category.message}</span>
            </div>
          }
        </div>
        <button
          type="submit"
          className="w-fit flex items-center justify-self-end gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          Enregistrer
        </button>
        {submitError && (
          <div className="flex gap-2 items-center mt-2">
            <img src="/icons/icon-error.svg" alt="w-4" />
            <span className="text-crimson text-preset-5-regular">{submitError}</span>
          </div>
        )}
      </form>
    </div>
  )
}
