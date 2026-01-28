"use client"

import { useState } from "react"
import useToastStore from "@/app/stores/toastStore"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { cardSchema, CardFormData } from "@/lib/card-schema"
import { API_ENDPOINTS } from "@/app/config/api"
import { DEFAULT_CATEGORIES } from "@/lib/categories"
import useCardStore from "@/app/stores/cardStore"



const inputStyle = {
  base: "p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]",
  error: "!border-crimson shadow-[2px_2px_0_var(--crimson)]"
}


export default function CardForm() {

  const { showToast } = useToastStore()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors: reactHookFormErrors },
    reset,
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: "onBlur",
  });

  const { fetchCards } = useCardStore()

  const onSubmit = (data: CardFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    fetch(API_ENDPOINTS.CREATE_CARD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json()
            .then(payload => {
              throw new Error(
                payload?.error?.formErrors?.[0] ||
                payload?.error?.message ||
                payload?.error ||
                "Erreur lors de l'envoi");
            })
        }
      })
      .then(() => {
        setIsSubmitting(false)
        reset();
        fetchCards();
        showToast("Carte créée avec succès.")
      })
      .catch((error) => {
        setSubmitError(error.message || 'Erreur lors de l\'envoi')
        setIsSubmitting(false)
      });
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full p-5 bg-white border sm:p-6 lg:p-8 max-w-310 border-ink rounded-2xl strokes-lg"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="question" className="text-preset-4-medium">Question</label>
        <input
          type="text" id="question"
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
        <label htmlFor="answer" className="text-preset-4-medium">Réponse</label>
        <textarea
          id="answer" rows={2}
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
        <label htmlFor="category" className="text-preset-4-medium">Catégorie</label>
        <select
          id="category"
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
        disabled={isSubmitting}
        className="w-fit flex items-center justify-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
        <img src="/icons/icon-circle-plus.svg" alt="" className="w-4" />
        Créer une carte
      </button>
      {submitError && (
        <div className="flex gap-2 items-center mt-2">
          <img src="/icons/icon-error.svg" alt="w-4" />
          <span className="text-crimson text-preset-5-regular">{submitError}</span>
        </div>
      )}
    </form>
  )
}