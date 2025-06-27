import { PropsWithChildren, useState } from 'react'
import { ToastContext } from './ToastContext'
import { ToastTypes } from './ToastContext.types'

export function ToastProvider({ children }: PropsWithChildren) {
  const [text, setText] = useState<string>('Copiado com sucesso.')
  const [show, setShow] = useState<boolean>(false)
  const [type, setType] = useState<ToastTypes>()
  const [timeoutId, setTimeoutId] = useState<number>(0)

  const message = (text: string, type: ToastTypes) => {
    setText(text)
    setShow(true)
    setType(type)

    if (timeoutId) {
      clearInterval(timeoutId)
    }

    const id = setTimeout(() => {
      setShow(false)
      setTimeoutId(0)
    }, 5000)

    setTimeoutId(id)
  }

  const warning = (text: string) => {
    message(text, ToastTypes.WARNING)
  }
  const error = (text: string) => {
    message(text, ToastTypes.ERROR)
  }
  const success = (text: string) => {
    message(text, ToastTypes.SUCCESS)
  }

  let classType
  switch(type) {
    case ToastTypes.ERROR:
      classType = 'toast-error'
      break;
    case ToastTypes.WARNING:
      classType = 'toast-warning'
      break;
    case ToastTypes.SUCCESS:
      classType = 'toast-success'
      break;
    default:
      classType = ''
  }

  return (
    <ToastContext.Provider value={{
      warning,
      error,
      success
    }}>
      <div className={`toast-container ${show ? 'toast-active' : ''} ${classType}`}>
        <span className='toast-text'>{text}</span>
      </div>
      {children}
    </ToastContext.Provider>
  )
}