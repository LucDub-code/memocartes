export default function CardForm() {
  return (
    <form className="flex flex-col p-8 bg-white border max-w-310 w-full border-ink rounded-2xl strokes-lg">
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="question" className="text-preset-4-medium">Question</label>
        <input type="text" id="question" name="question" className="p-4 border rounded-md border-ink" placeholder="Exemple : Quelle est la capitale de la France ?" required />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="answer" className="text-preset-4-medium">Réponse</label>
        <textarea id="answer" name="answer" rows={2} className="p-4 border rounded-md border-ink resize-none" placeholder="Exemple : Paris" required />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="category" className="text-preset-4-medium">Catégorie</label>
        <input type="text" id="category" name="category" className="p-4 border rounded-md border-ink" placeholder="Géographie" required />
      </div>
      <button type="button" className="w-fit flex items-center justify-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-yellow shadow-lg">
        <img src="/icons/icon-circle-plus.svg" alt="" className="w-4" />
        Créer une carte
      </button>
    </form>
  )
}