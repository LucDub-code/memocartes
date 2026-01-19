import StudyCard from "./StudyCard"

export default function StudyCardArea() {
  return (
    <div className="w-full h-full p-5">
      <StudyCard />
      <div className="flex items-center justify-center gap-5">
        <button type="button" className="flex items-center justify-center gap-1 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-lg">
          <img src="/icons/icon-circle-check.svg" alt="" className="w-4" />
          Carte mémorisée
        </button>
        <button type="button" className="flex items-center justify-center gap-1 px-4 py-3 text-center bg-white border rounded-full cursor-pointer border-ink text-preset-4-medium shadow-lg hover:bg-background">
          <img src="/icons/icon-reset.svg" alt="" className="w-4" />
          Réinitialiser carte
        </button>
      </div>
    </div>
  )
}