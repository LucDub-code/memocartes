import CardForm from "../components/cards/CardForm"
import CardFilters from "../components/CardFilters"
import CardGrid from "../components/cards/CardGrid"

export default function CardsPage() {
  return (
    <main className="flex flex-col w-full gap-8 pt-8">
      <h1 className="sr-only">Mes cartes</h1>
      <CardForm />
      <CardFilters className="pt-4" />
      <CardGrid />
      {/* <div className="flex flex-col items-center justify-center w-full h-62">
        <p className="mb-4 text-preset-2">{`Aucune carte pour l'instant`}</p>
        <p className="text-preset-4-regular">Ajoutez votre première carte avec le formulaire ci-dessus et elle apparaîtra ici.</p>
      </div> */}
    </main>
  )
}