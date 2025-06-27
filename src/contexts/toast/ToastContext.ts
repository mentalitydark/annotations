import { createContext } from "react"
import { ToastContextInterface } from "./ToastContext.types"

export const ToastContext = createContext<ToastContextInterface>({} as ToastContextInterface)