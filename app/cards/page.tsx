import CardForm from "../components/cards/CardForm"
import CardToolbar from "../components/CardToolbar"
import CardGrid from "../components/cards/CardGrid"
import CardEmptyState from "../components/cards/CardEmptyState"
import CardModalWrapper from "../components/cards/CardModalWrapper"
import ToastContainer from "@/app/components/toast/ToastContainer"


export default function CardsPage() {
  return (
    <main className="flex flex-col w-full gap-6 pt-6 lg:gap-8 lg:pt-8 pb-26">
      <h1 className="sr-only">Mes cartes</h1>
      <CardForm />
      <CardToolbar className="pt-4" store="cards" />
      <CardGrid />
      {/* <CardEmptyState /> */}
      <CardModalWrapper />
      <ToastContainer />
    </main>
  )
}