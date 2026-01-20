import StudyStatCard from "./StudyStatCard"

const statsData = [
    { title: "Total des cartes", value: 0, color: "bg-light-blue", icon: "/icons/icon-stats-total.svg" },
    { title: "Mémorisées", value: 0, color: "bg-teal", icon: "/icons/icon-stats-mastered.svg" },
    { title: "En cours", value: 0, color: "bg-salmon", icon: "/icons/icon-stats-in-progress.svg" },
    { title: "Non commencées", value: 0, color: "bg-pink", icon: "/icons/icon-stats-not-started.svg" },
  ]

export default function StudyStats() {
  return (
    <section className="flex flex-col p-6 bg-white max-w-98 w-full h-158 strokes-md rounded-2xl">
      <h2 className="mb-3 text-preset-2">Statistiques d’étude</h2>
      <div className="flex flex-col gap-5">
        {statsData.map((stat) => (
            <StudyStatCard key={stat.title} {...stat} />
          ))}
      </div>
    </section>
  )
}