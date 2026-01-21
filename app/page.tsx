import StudyMain from "./components/study/studyMain/StudyMain";
import StudyStats from "./components/study/studyStats/StudyStats";

export default function StudyPage() {
  return (
    <main className="flex w-full pt-8 gap-8">
      <h1 className="sr-only">Mode Étude</h1>
      <StudyMain />
      <StudyStats />
    </main>
  );
}
