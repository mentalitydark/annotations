import { useContext } from "react"
import { TimerContext } from "../../contexts/timer"

export function useTimerCard() {
  const { timer, restart } = useContext(TimerContext)

  const dateTime = timer.toLocaleTimeString('pt-BR')

  return {
    restart,
    dateTime
  }
}