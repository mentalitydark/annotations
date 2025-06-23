import { createContext } from "react"
import { TimerContextInterface } from "./TimerContext.types"

export const TimerContext = createContext<TimerContextInterface>({} as TimerContextInterface)