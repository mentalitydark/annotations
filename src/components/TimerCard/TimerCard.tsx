import { CardElements } from "../Card";
import { useTimerCard } from "./useTimerCard";

export function TimerCard() {
  const { restart, dateTime } = useTimerCard()

  return (
    <CardElements.Main>
      <CardElements.Header>
        <CardElements.Title value="TEMPORIZADOR" />
      </CardElements.Header>
      <CardElements.Content>
        <div className="timer-container">
          <span className="timer-label">Iniciado às</span>
          <span className="timer-value">{dateTime}</span>
        </div>
      </CardElements.Content>
      <CardElements.Footer>
        <CardElements.Action action={() => restart()} title="REINICIAR" />
      </CardElements.Footer>
    </CardElements.Main>
  )
}