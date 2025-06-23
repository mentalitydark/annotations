import { useContext, useRef } from 'react'
import { CardsContext } from '../../contexts/cards'
import { InvalidArgument } from '../../Errors'
import { Item } from '../../models'
import { EventEmitter } from '../../Utils/EventEmitter'

export function useNewItem() {
  const { cards } = useContext(CardsContext)
  const itemInputRef = useRef<HTMLInputElement>(null)
  const cardSelectRef = useRef<HTMLSelectElement>(null)

  const createItemSubmit = () => {
    try {
      if (!itemInputRef.current || !cardSelectRef.current) {
        return
      }

      if (!cardSelectRef.current.value) {
        throw new InvalidArgument("Necessário selecionar um Card")
      }

      if (!itemInputRef.current.value) {
        throw new InvalidArgument("Necessário informar uma descrição para o Item")
      }

      const card = cards.get(cardSelectRef.current.value)

      if (!card) {
        return
      }

      const item = new Item(card.id)
      item.description = itemInputRef.current.value

      card.addItem(item)

      EventEmitter.dispatch(card.id, { quantity: card.items.size })
      
      itemInputRef.current.value = ""
      itemInputRef.current.focus()
    } catch (e) {
      if (e instanceof InvalidArgument) { console.log(e.message) }
    }
  }

  return {
    createItemSubmit,
    itemInputRef,
    cardSelectRef,
    cards
  }
}