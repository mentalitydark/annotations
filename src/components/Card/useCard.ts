import { useCallback, useContext, useEffect, useState } from "react"
import { CardsContext } from "../../contexts/cards"
import { EntityNotFound } from "../../Errors"
import { EventEmitter } from "../../Utils/EventEmitter"
import { Item } from "../../models"
import { DateDiff } from "../../Utils/DateDiff"

export function useCard(id: string, items: Map<string, Item>) {
  const [itemsCount, setItemsCount] = useState(0)
  const { removeCard, cards } = useContext(CardsContext)

  useEffect(() => {
    EventEmitter.subscribe(id, ({ quantity }: { quantity: number }) => {
      setItemsCount(quantity)
    })

    return () => {
      EventEmitter.unsubscribe(id)
    }
  }, [id])

  const deleteCard = useCallback((key: string) => {
    try {
      removeCard(key)
    } catch (e) {
      if (e instanceof EntityNotFound) {
        console.log(e.message)
      }
    }
  }, [removeCard])

  const copyItems = useCallback(() => {
    const card = cards.get(id)!

    const text = Array
      .from(items.values())
      .map((item) => `${DateDiff(item.timerUsed, item.createdAt)} - ${card.description.toUpperCase()} ${item.description}`)
      .join('\n')

    navigator.clipboard.writeText(text)
  }, [items, id, cards])

  return {
    deleteCard,
    itemsCount,
    copyItems
  }
}