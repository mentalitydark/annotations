import { createContext } from "react"
import { CardsContextInterface } from "./CardsContext.types"

export const CardsContext = createContext<CardsContextInterface>({} as CardsContextInterface)