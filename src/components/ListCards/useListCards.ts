import { useContext } from "react"
import { CardsContext } from "../../contexts/cards"

export function useListCards() {
  const { cards } = useContext(CardsContext)

  return {
    cards,
  }
}