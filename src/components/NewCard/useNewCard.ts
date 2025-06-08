import { useContext, useRef } from 'react'
import { CardsContext } from '../../contexts/cards'
import { InvalidArgument } from '../../Errors'

export function useNewCard() {
  const { newCard } = useContext(CardsContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const newCardSubmit = () => {
    try {
      if (!inputRef.current) {
        return
      }

      newCard(inputRef.current.value)

      inputRef.current.value = ""
      inputRef.current.focus()
    } catch (e) {
      if (e instanceof InvalidArgument) { console.log(e.message) }
    }
  }

  return {
    newCardSubmit,
    inputRef
  }
}