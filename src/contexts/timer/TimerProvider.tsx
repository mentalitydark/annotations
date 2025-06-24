import { PropsWithChildren, useState } from "react";
import { TimerContext } from "./TimerContext";

export function TimerProvider({ children }: PropsWithChildren) {
  const [timer, setTimer] = useState<Date>(new Date())

  const restart = () => {
    setTimer(new Date())
  }

  return (
    <TimerContext.Provider value={{
      timer,
      restart
    }}>
      {children}
    </TimerContext.Provider>
  )
}