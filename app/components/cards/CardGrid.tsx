import Card from "./Card"

export default function CardGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}