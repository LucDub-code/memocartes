import CardMenu from "./CardMenu"

interface CardProps {
  id: string
  question: string
  answer: string
  category: string
  mastery_level: number
}

export default function Card({ id, question, answer, category, mastery_level }: CardProps) {
  return (
    <article className="flex flex-col sm:max-w-md lg:max-w-99.5 w-full h-60 sm:h-74 lg:h-64.5 border border-ink rounded-2xl strokes-md bg-white">
      <div className="p-4 border-b border-ink">
        <p className="text-preset-3">{question}</p>
      </div>
      <div className="flex-1 p-4 border-b border-ink">
        <p className="mb-2 text-preset-5 text-ink/60">Réponse:</p>
        <p className="mb-auto text-preset-5">{answer}</p>
      </div>
      <div className="flex items-center px-4 h-14">
        <div className="flex items-center h-full pr-4 border-r border-ink">
          <span className="px-3 py-1 bg-white border rounded-full shadow-small border-ink w-fit text-preset-6">{category}</span>
        </div>
        <div className="flex items-center h-full gap-2 pl-2 mr-auto">
          <div className="h-2 overflow-hidden bg-white border rounded-full w-15 border-ink">
            <div
              className="h-full transition-all duration-300 ease-out rounded-full bg-ink"
              style={{ width: `${(mastery_level / 5) * 100}%` }}
            />
          </div>
          {mastery_level === 5 ? (
            <span className="flex items-center gap-1 px-3 py-1 border rounded-full bg-teal shadow-small border-ink w-fit text-preset-6">
              <img src="/icons/icon-mastered.svg" alt="" />
              Mémorisée 5/5
            </span>
          ) : (
            <span className="text-preset-6">{mastery_level}/5</span>
          )}
        </div>
        <CardMenu cardData={{ id, question, answer, category }} />
      </div>
    </article>
  )
}