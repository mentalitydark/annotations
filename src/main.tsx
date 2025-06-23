import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { CardsProvider } from "./contexts/cards"
import { TimerProvider } from "./contexts/timer"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TimerProvider>
      <CardsProvider>
        <App />
      </CardsProvider>
    </TimerProvider>
  </React.StrictMode>,
)
