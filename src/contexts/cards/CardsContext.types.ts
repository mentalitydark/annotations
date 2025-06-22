import { Card } from "../../models"

export interface CardsContextInterface {
  cards: Map<Card["id"], Card>
  createCard: (description: Card["description"]) => void
  updateCard: (id: Card["id"], description: Card["description"]) => void
  removeCard: (id: Card["id"]) => void,
  removeAllCards: () => void
}