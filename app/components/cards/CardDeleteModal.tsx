import useCardModalStore from "@/app/stores/cardModalStore"
import useToastStore from "@/app/stores/toastStore"
import useCardStore from "@/app/stores/cardStore"
import { API_ENDPOINTS } from "@/app/config/api"


export default function CardDeleteModal() {

  const { closeModal, startLoading, stopLoading, cardId } = useCardModalStore()
  const { fetchCards } = useCardStore()
  const { showToast } = useToastStore()

  const handleDelete = () => {
    if (!cardId) return

    startLoading()

    fetch(API_ENDPOINTS.DELETE_CARD(cardId), {
      method: "DELETE",
    })
      .then(response =>
        response.json().then(payload => {
          if (!response.ok) {
            throw new Error(
              payload?.error?.message ||
              payload?.error ||
              "Erreur lors de la suppression."
            )
          }
          return payload
        })
      )
      .then(() => {
        closeModal()
        showToast("Carte supprimée.")
        fetchCards()
      })
      .catch((error) => {
        stopLoading()
        showToast(error.message || "Erreur lors de la suppression.")
      })
  }

  return (
    <div
      className="relative w-full bg-white max-w-150 rounded-2xl strokes-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        aria-label="Fermer la modal"
        className="absolute cursor-pointer top-[7%] left-[95%]"
      >
        <img src="/icons/icon-cross.svg" alt="" className="w-4" />
      </button>
      <div className="p-6 border-b border-ink">
        <h2 className="mb-5 text-preset-2" id="modal-title">Supprimer cette carte ?</h2>
        <p className="text-preset-4-regular">Cette action est irréversible.</p>
      </div>
      <div className="flex justify-end gap-2 px-6 pt-3 pb-4">
        <button onClick={closeModal} type="button" className="w-fit flex items-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-white shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          Annuler
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="w-fit flex items-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          Supprimer
        </button>
      </div>
    </div>
  )
}