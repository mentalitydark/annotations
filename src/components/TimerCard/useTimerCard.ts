import { useContext } from "react"
import { TimerContext } from "../../contexts/timer"
import { ToastContext } from "../../contexts/toast"

export function useTimerCard() {
  const { timer, restart: _restart } = useContext(TimerContext)
  const { warning } = useContext(ToastContext)

  const dateTime = timer.toLocaleTimeString('pt-BR')

  const restart = () => {
    _restart()
    warning('Temporizador reiniciado')
  }

  return {
    restart,
    dateTime
  }
}