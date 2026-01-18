export default function StudyMainFooter() {
  return (
    <div className="flex items-center justify-between w-full p-5 border-t h-21 border-ink text-preset-4-medium">
      <button type="button" className="flex gap-1 px-4 py-3 bg-white border rounded-full cursor-pointer border-ink hover:bg-background">
        <img src="/icons/icon-chevron-left.svg" alt="" className="w-4" />
        <span>Précédent</span>
      </button>
      <span className="text-preset-5 text-ink-muted">Carte 1 sur 1</span>
      <button type="button" className="flex gap-1 px-4 py-3 bg-white border rounded-full cursor-pointer border-ink hover:bg-background">
        <span>Suivant</span>
        <img src="/icons/icon-chevron-right.svg" alt="" className="w-4" />
      </button>
    </div>
  )
}