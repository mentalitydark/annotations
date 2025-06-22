import { useContext, useRef } from 'react'
import { CardsContext } from '../../contexts/cards'
import { InvalidArgument } from '../../Errors'

export function useNewCard() {
  const { createCard } = useContext(CardsContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const createCardSubmit = () => {
    try {
      if (!inputRef.current) {
        return
      }

      createCard(inputRef.current.value)

      inputRef.current.value = ""
      inputRef.current.focus()
    } catch (e) {
      if (e instanceof InvalidArgument) {
        console.log(e.message)
      }
    }
  }

  return {
    createCardSubmit,
    inputRef
  }
}