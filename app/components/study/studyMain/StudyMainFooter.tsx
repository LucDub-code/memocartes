import useCardStore from "@/app/stores/cardStore"

export default function StudyMainFooter() {

  const { studyDisplayedCards, currentIndex, nextCard, prevCard } = useCardStore()

  return (
    <div className="flex items-center justify-between w-full p-5 border-t h-18 sm:h-21 border-ink text-preset-4-medium">
      <button type="button" className="flex gap-1 px-3 py-3 bg-white border rounded-full cursor-pointer sm:px-4 border-ink hover:bg-background" onClick={() => prevCard()}>
        <img src="/icons/icon-chevron-left.svg" alt="" className="w-4" />
        <span className="hidden sm:inline">Précédent</span>
      </button>
      <span className="text-preset-5 text-ink-muted">Carte {currentIndex + 1} sur {studyDisplayedCards.length}</span>
      <button type="button" className="flex gap-1 px-3 py-3 bg-white border rounded-full cursor-pointer sm:px-4 border-ink hover:bg-background" onClick={() => nextCard()}>
        <span className="hidden sm:inline">Suivant</span>
        <img src="/icons/icon-chevron-right.svg" alt="" className="w-4" />
      </button>
    </div>
  )
}