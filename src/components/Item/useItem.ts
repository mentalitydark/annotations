import { useCallback, useContext, useMemo } from "react";
import { CardsContext } from "../../contexts/cards";
import { TimerContext } from "../../contexts/timer";
import { Item } from "../../models";
import { EventEmitter } from "../../Utils/EventEmitter";
import { DateDiff } from "../../Utils/DateDiff";

export function useItem(item: Item) {
  const { cards } = useContext(CardsContext)
  const { timer } = useContext(TimerContext)

  const removeItem = useCallback(() => {
    const card = cards.get(item.cardId)!

    card.removeItem(item.id)
    EventEmitter.dispatch(card.id, { quantity: card.itens.size })
  }, [cards, item])

  const timerDiff = useMemo(() => DateDiff(timer, item.createdAt), [item.createdAt, timer])

  return {
    removeItem,
    timerDiff
  }
}