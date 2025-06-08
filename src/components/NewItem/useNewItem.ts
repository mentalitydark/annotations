import { useContext, useRef } from 'react'
import { CardsContext } from '../../contexts/cards'
import { InvalidArgument } from '../../Errors'
import { Item } from '../../models'
import { EventEmitter } from '../../Utils/EventEmitter'

export function useNewItem() {
  const { cards } = useContext(CardsContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  const newItemSubmit = () => {
    try {
      if (!inputRef.current || !selectRef.current) {
        return
      }

      if (!selectRef.current.value) {
        throw new InvalidArgument("Necessário selecionar um Card")
      }

      const card = cards.get(selectRef.current.value)

      if (!card) {
        return
      }

      const item = new Item(card.id)
      item.description = inputRef.current.value

      card.addItem(item)

      EventEmitter.dispatch(card.id, { quantity: card.itens.size })
      
      inputRef.current.value = ""
      inputRef.current.focus()
    } catch (e) {
      if (e instanceof InvalidArgument) { console.log(e.message) }
    }
  }

  return {
    newItemSubmit,
    inputRef,
    selectRef,
    cards
  }
}