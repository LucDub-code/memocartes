import StudyMainHeader from "./StudyMainHeader"
import StudyMainFooter from "./StudyMainFooter"
import StudyEmptyState from "./StudyEmptyState"
import StudyCardArea from "./StudyCardArea"

export default function StudyMain() {
  return (
    <section className="flex flex-col w-full bg-white lg:max-w-204 lg:min-w-160 strokes-md rounded-2xl">
      <StudyMainHeader />
      {/* <StudyEmptyState /> */}
      <StudyCardArea />
      <StudyMainFooter />
    </section>
  )
}