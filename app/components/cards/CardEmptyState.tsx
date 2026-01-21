export default function CardEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-62">
      <p className="mb-4 text-preset-2">{`Aucune carte pour l'instant`}</p>
      <p className="text-preset-4-regular">Ajoutez votre première carte avec le formulaire ci-dessus et elle apparaîtra ici.</p>
    </div>
  )
}