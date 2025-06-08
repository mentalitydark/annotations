import React, { KeyboardEvent } from "react";

export function EnterEvent(callback: CallableFunction): React.KeyboardEventHandler<HTMLInputElement> {
  return function (event: KeyboardEvent) {
    if (event.key === "Enter") {
      callback()
    }
  }
}

