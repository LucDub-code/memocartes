import StudyStatCard from "./StudyStatCard"

const statsData = [
  { title: "Total des cartes", value: 0, color: "bg-light-blue", icon: "/icons/icon-stats-total.svg" },
  { title: "Mémorisées", value: 0, color: "bg-teal", icon: "/icons/icon-stats-mastered.svg" },
  { title: "En cours", value: 0, color: "bg-salmon", icon: "/icons/icon-stats-in-progress.svg" },
  { title: "Non commencées", value: 0, color: "bg-pink", icon: "/icons/icon-stats-not-started.svg" },
]

export default function StudyStats() {
  return (
    <section className="flex flex-col w-full p-4 bg-white sm:p-5 lg:p-6 lg:max-w-98 lg:min-w-68 strokes-md rounded-2xl">
      <h2 className="mb-4 text-preset-2">Statistiques d’étude</h2>
      <div className="grid flex-col gap-4 sm:grid-cols-2 lg:flex sm:gap-5">
        {statsData.map((stat) => (
          <StudyStatCard key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  )
}