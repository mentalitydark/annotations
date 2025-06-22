import { useContext } from "react";
import { CardsContext } from "../../contexts/cards";
import { Item } from "../../models";
import { EventEmitter } from "../../Utils/EventEmitter";

export function useItem(item: Item) {
  const { cards } = useContext(CardsContext)

  const removeItem = () => {
    const card = cards.get(item.cardId)!

    card.removeItem(item.id)
    EventEmitter.dispatch(card.id, { quantity: card.itens.size })
  }

  return {
    removeItem
  }
}