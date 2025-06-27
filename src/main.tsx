import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { CardsProvider } from "./contexts/cards"
import { TimerProvider } from "./contexts/timer"
import { ToastProvider } from "./contexts/toast"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <TimerProvider>
        <CardsProvider>
          <App />
        </CardsProvider>
      </TimerProvider>
    </ToastProvider>
  </React.StrictMode>,
)
