import { useContext, useEffect, useState } from "react"
import { CardsContext } from "../../contexts/cards"
import { EntityNotFound } from "../../Errors"
import { EventEmitter } from "../../Utils/EventEmitter"

export function useCard(id: string) {
  const [itensCount, setItensCount] = useState(0)
  const { removeCard } = useContext(CardsContext)

  useEffect(() => {
    EventEmitter.subscribe(id, ({ quantity }: { quantity: number }) => {
      setItensCount(quantity)
    })

    return () => {
      EventEmitter.unsubscribe(id)
    }
  }, [id])

  const remove = (key: string) => {
    try {
      removeCard(key)
    } catch (e) {
      if (e instanceof EntityNotFound) {
        console.log(e.message)
      }
    }
  }

  return {
    remove,
    itensCount
  }
}