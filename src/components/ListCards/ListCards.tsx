import { Card } from "../Card"
import { useListCards } from "./useListCards"

export function ListCards() {
  const { cards } = useListCards()

  return (
    <div>
      {
        Array.from(cards).map(([, card]) => (
          <Card key={card.id} id={card.id} title={card.description} itens={card.itens} />
        ))
      }
    </div>
  )
}