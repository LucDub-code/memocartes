import StudyMain from "./components/study/studyMain/StudyMain";
import StudyStats from "./components/study/studyStats/StudyStats";

export default function StudyPage() {
  return (
    <main className="flex gap-8 pt-8 w-full">
      <h1 className="sr-only">Mode Étude</h1>
      <StudyMain />
      <StudyStats />
    </main>
  );
}
