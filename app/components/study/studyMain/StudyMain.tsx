import StudyMainHeader from "./StudyMainHeader"
import StudyEmptyState from "./StudyEmptyState"

export default function StudyMain() {
  return (
    <div className="flex flex-col bg-white w-204 h-158 strokes-outer-md rounded-2xl">
      <StudyMainHeader />
      <StudyEmptyState />
    </div>
  )
}