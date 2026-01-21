import useCardModalStore from "@/app/stores/cardModalStore"

export default function CardDeleteModal() {

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
        className="relative w-full bg-white max-w-150 rounded-2xl strokes-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Fermer la modal"
          className="absolute cursor-pointer top-4 left-140"
        >
          <img src="/icons/icon-cross.svg" alt="" className="w-4" />
        </button>
        <div className="p-6 border-b border-ink">
          <h2 className="mb-5 text-preset-2" id="modal-title">Supprimer cette carte ?</h2>
          <p className="text-preset-4-regular">Cette action est irréversible.</p>
        </div>
        <div className="flex justify-end gap-2 px-6 pt-3 pb-4">
          <button type="button" className="w-fit flex items-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-white shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-shadow duration-300">
            Annuler
          </button>
          <button type="button" className="w-fit flex items-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-shadow duration-300">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  )
}