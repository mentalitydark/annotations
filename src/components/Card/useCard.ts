import { useCallback, useContext, useEffect, useState } from "react"
import { CardsContext } from "../../contexts/cards"
import { EntityNotFound } from "../../Errors"
import { EventEmitter } from "../../Utils/EventEmitter"
import { Item } from "../../models"
import { DateDiff } from "../../Utils/DateDiff"
import { ToastContext } from "../../contexts/toast"

export function useCard(id: string, items: Map<string, Item>) {
  const [itemsCount, setItemsCount] = useState(0)
  const { removeCard, cards } = useContext(CardsContext)
  const { success, error } = useContext(ToastContext)

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
      success('Card removido')
    } catch (e) {
      if (e instanceof EntityNotFound) {
        error(e.message)
      }
    }
  }, [removeCard, success, error])

  const copyItems = useCallback(async () => {
    const card = cards.get(id)!

    const text = Array
      .from(items.values())
      .map((item) => `${DateDiff(item.timerUsed, item.createdAt)} - ${card.description.toUpperCase()} ${item.description}`)
      .join('\n')

    try {
      await navigator.clipboard.writeText(text)
      success('Itens copiados')
    } catch (_) {
      error('Erro ao copiar itens')
    }
  }, [items, id, cards, error, success])

  return {
    deleteCard,
    itemsCount,
    copyItems
  }
}