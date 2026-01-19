import StudyMainHeader from "./StudyMainHeader"
import StudyMainFooter from "./StudyMainFooter"
import StudyEmptyState from "./StudyEmptyState"
import StudyCardArea from "./StudyCardArea"

export default function StudyMain() {
  return (
    <section className="flex flex-col bg-white w-204 h-158 strokes-md rounded-2xl">
      <StudyMainHeader />
      {/* <StudyEmptyState /> */}
      <StudyCardArea />
      <StudyMainFooter />
    </section>
  )
}