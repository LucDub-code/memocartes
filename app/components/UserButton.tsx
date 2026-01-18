export default function UserButton() {
  return (
    <button
      type="button"
      aria-label="Se connecter"
      className="flex items-center justify-center bg-white border rounded-full border-ink shadow-soft w-13 h-13 cursor-pointer hover:bg-background">
      <img src="/icons/icon-question.svg" alt="" className="w-6" />
    </button>
  )
}