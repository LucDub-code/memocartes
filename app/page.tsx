import StudyMain from "./components/study/studyMain/StudyMain";
import StudyStats from "./components/study/studyStats/StudyStats";
import OpenAuthFromQuery from "./components/auth/OpenAuthFromQuery"

export default function StudyPage() {
  return (
    <main className="flex flex-col w-full gap-6 pt-6 lg:pt-8 lg:flex-row pb-26">
      <OpenAuthFromQuery />
      <h1 className="sr-only">Mode Étude</h1>
      <StudyMain />
      <StudyStats />
    </main>
  );
}
