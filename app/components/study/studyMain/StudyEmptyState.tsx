export default function StudyEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 pb-8">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-preset-2">Aucune carte à étudier</h1>
        <p className="text-center text-preset-4-regular text-ink-muted w-72">Vous n’avez pas encore créé de cartes. Commencez par en ajouter une.</p>
      </div>
      <button className="flex items-center gap-1 px-5 py-3 bg-white border rounded-full cursor-pointer border-ink shadow-strong text-preset-4-medium hover:bg-background">
        Aller aux cartes
      </button>
    </div>
  )
}

// Textes en mode non connecté sera Aucune carte à étudier + Connectez-vous pour créer des cartes et commencer à étudier. + Se connecter