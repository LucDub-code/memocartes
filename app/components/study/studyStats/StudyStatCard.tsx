interface StudyStatCardProps {
  title: string
  value: number
  color: string
  icon: string
}

export default function StudyStatCard({ title, value, color, icon }: StudyStatCardProps) {
  return (
    <article className="flex rounded-xl max-w-86 w-full h-30 strokes-sm overflow-hidden">
      <div className="w-[70%] flex flex-col m-5">
        <p className="text-preset-4-medium">{title}</p>
        <p className="mt-auto text-preset-1">{value}</p>
      </div>
      <div className={`w-[30%] border-l border-ink ${color} flex items-center justify-center`}>
        <img src={icon} alt="" className="w-6" />
      </div>
    </article>
  )
}