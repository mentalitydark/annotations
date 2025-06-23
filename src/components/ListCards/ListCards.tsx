import { Card } from "../Card"
import { useListCards } from "./useListCards"

export function ListCards() {
  const { cards } = useListCards()

  return (
    <div className="list-cards-container">
      {
        Array.from(cards).map(([, card]) => (
          <Card key={card.id} id={card.id} title={card.description} items={card.items} />
        ))
      }
    </div>
  )
}