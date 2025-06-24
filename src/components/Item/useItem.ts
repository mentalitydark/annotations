import { useCallback, useContext, useMemo } from "react";
import { CardsContext } from "../../contexts/cards";
import { Item } from "../../models";
import { EventEmitter } from "../../Utils/EventEmitter";
import { DateDiff } from "../../Utils/DateDiff";

export function useItem(item: Item) {
  const { cards } = useContext(CardsContext)

  const removeItem = useCallback(() => {
    const card = cards.get(item.cardId)!

    card.removeItem(item.id)
    EventEmitter.dispatch(card.id, { quantity: card.items.size })
  }, [cards, item])

  const timerDiff = useMemo(() => DateDiff(item.timerUsed, item.createdAt), [item])

  return {
    removeItem,
    timerDiff
  }
}