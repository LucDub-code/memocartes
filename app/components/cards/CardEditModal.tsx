import useCardModalStore from "@/app/stores/cardModalStore"

export default function CardEditModal() {

  const { closeModal } = useCardModalStore()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={closeModal}
    >
      <div
        className="relative w-full p-8 bg-white max-w-150 rounded-2xl strokes-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Fermer la modal"
          className="absolute cursor-pointer top-4 left-140"
        >
          <img src="/icons/icon-cross.svg" alt="" className="w-4" />
        </button>
        <h2 className="mb-5 text-preset-2" id="modal-title">Modifier la carte</h2>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="edit-question" className="text-preset-4-medium">Question</label>
          <input type="text" id="edit-question" name="edit-question" className="p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]" placeholder="Exemple : Quelle est la capitale de la France ?" required />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="edit-answer" className="text-preset-4-medium">Réponse</label>
          <textarea id="edit-answer" name="edit-answer" rows={2} className="p-4 border rounded-md cursor-pointer resize-none border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]" placeholder="Exemple : Paris" required />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="edit-category" className="text-preset-4-medium">Catégorie</label>
          <input type="text" id="edit-category" name="edit-category" className="p-4 border rounded-md cursor-pointer border-ink hover:shadow-[2px_2px_0_var(--ink)] focus:outline-none focus:border-blue focus:shadow-[2px_2px_0_var(--blue)]" placeholder="Géographie" required />
        </div>
        <button type="button" className="w-fit flex items-center justify-self-end gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-shadow duration-300">
          Enregistrer
        </button>
      </div>
    </div>
  )
}