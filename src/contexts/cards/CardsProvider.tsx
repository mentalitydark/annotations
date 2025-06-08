import { PropsWithChildren, useState } from "react"

import { Card } from "../../models"
import { EntityNotFound, InvalidArgument } from "../../Errors"

import { CardsContext } from "./CardsContext"
import { CardsContextInterface } from "./CardsContext.types"

export function CardsProvider({ children }: PropsWithChildren) {
  const [cards, setCards] = useState<CardsContextInterface["cards"]>(new Map())

  const newCard = (description: Card["description"]) => {
    if (description === "") {
      throw new InvalidArgument("Necessário informar um nome para o Card.")
    }

    const card = new Card(description)

    setCards(new Map(cards.set(card.id, card)))
  }

  const updateCard = (id: Card["id"], description: Card["description"]) => {
    const card = cards.get(id)

    if (!card) {
      throw new EntityNotFound("Card não encontrado.")
    }

    card.description = description

    setCards(new Map(cards.set(card.id, card)))
  }

  const removeCard = (id: Card["id"]) => {
    if (!cards.delete(id)) {
      throw new EntityNotFound("Card não encontrado.")
    }

    setCards(new Map(cards))
  }

  const removeAll = () => {
    setCards(new Map())
  }

  return (
    <CardsContext.Provider value={{
      cards,
      newCard,
      updateCard,
      removeCard,
      removeAll
    }}>
      {children}
    </CardsContext.Provider>
  )

}