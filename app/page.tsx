import StudyMain from "./components/study/StudyMain";
import StudyStats from "./components/study/StudyStats";

export default function StudyPage() {
  return (
    <div className="flex gap-8 pt-8">
      <StudyMain />
      <StudyStats />
    </div>
  );
}
