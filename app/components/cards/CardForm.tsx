"use client"

import useToastStore from "@/app/stores/toastStore"

export default function CardForm() {

  const { showToast } = useToastStore()

  return (
    <form className="flex flex-col w-full p-8 bg-white border max-w-310 border-ink rounded-2xl strokes-lg">
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="question" className="text-preset-4-medium">Question</label>
        <input type="text" id="question" name="question" className="p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]" placeholder="Exemple : Quelle est la capitale de la France ?" required />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="answer" className="text-preset-4-medium">Réponse</label>
        <textarea id="answer" name="answer" rows={2} className="p-4 border rounded-md cursor-pointer resize-none border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]" placeholder="Exemple : Paris" required />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="category" className="text-preset-4-medium">Catégorie</label>
        <input type="text" id="category" name="category" className="p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]" placeholder="Géographie" required />
      </div>
      <button
        type="button"
        onClick={() => showToast("Carte créée avec succés.")}
        className="w-fit flex items-center justify-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
        <img src="/icons/icon-circle-plus.svg" alt="" className="w-4" />
        Créer une carte
      </button>
    </form>
  )
}