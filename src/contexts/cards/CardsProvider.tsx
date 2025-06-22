import { PropsWithChildren, useCallback, useState } from "react"

import { Card } from "../../models"
import { EntityNotFound, InvalidArgument } from "../../Errors"

import { CardsContext } from "./CardsContext"
import { CardsContextInterface } from "./CardsContext.types"

export function CardsProvider({ children }: PropsWithChildren) {
  const [cards, setCards] = useState<CardsContextInterface["cards"]>(new Map())

  const createCard = useCallback((description: Card["description"]) => {
    if (description === "") {
      throw new InvalidArgument("Necessário informar um nome para o Card.")
    }

    const card = new Card(description)

    setCards(new Map(cards.set(card.id, card)))
  }, [cards])

  const updateCard = useCallback((id: Card["id"], description: Card["description"]) => {
    const card = cards.get(id)

    if (!card) {
      throw new EntityNotFound("Card não encontrado.")
    }

    card.description = description

    setCards(new Map(cards.set(card.id, card)))
  }, [cards])

  const removeCard = useCallback((id: Card["id"]) => {
    if (!cards.delete(id)) {
      throw new EntityNotFound("Card não encontrado.")
    }

    setCards(new Map(cards))
  }, [cards])

  const removeAllCards = useCallback(() => {
    setCards(new Map())
  }, [])

  return (
    <CardsContext.Provider value={{
      cards,
      createCard,
      updateCard,
      removeCard,
      removeAllCards
    }}>
      {children}
    </CardsContext.Provider>
  )

}