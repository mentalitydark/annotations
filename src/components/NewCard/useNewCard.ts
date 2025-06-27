import { useContext, useRef } from 'react'
import { CardsContext } from '../../contexts/cards'
import { InvalidArgument } from '../../Errors'
import { ToastContext } from '../../contexts/toast'

export function useNewCard() {
  const { createCard } = useContext(CardsContext)
  const { success, error } = useContext(ToastContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const createCardSubmit = () => {
    try {
      if (!inputRef.current) {
        return
      }

      createCard(inputRef.current.value)

      inputRef.current.value = ""
      inputRef.current.focus()
      success('Card criado')
    } catch (e) {
      if (e instanceof InvalidArgument) {
        error(e.message)
      }
    }
  }

  return {
    createCardSubmit,
    inputRef
  }
}