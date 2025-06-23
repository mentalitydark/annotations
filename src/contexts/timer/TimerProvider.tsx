import { PropsWithChildren, useRef } from "react";
import { TimerContext } from "./TimerContext";



export function TimerProvider({ children }: PropsWithChildren) {
  const timerRef = useRef<Date>(new Date())

  const restart = () => {
    timerRef.current = new Date()
  }

  return (
    <TimerContext.Provider value={{
      timer: timerRef.current,
      restart
    }}>
      {children}
    </TimerContext.Provider>
  )
}