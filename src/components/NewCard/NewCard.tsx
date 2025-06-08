import { CardElements } from "../Card"
import { EnterEvent } from '../../Utils'
import { useNewCard } from './useNewCard'

export function NewCard() {
  const { newCardSubmit, inputRef } = useNewCard()
  
  return (
    <CardElements.Main>
      <CardElements.Header>
        <CardElements.Title value="Novo card" />
      </CardElements.Header>
      <CardElements.Content>
        <input
          ref={inputRef}
          type="text"
          name="new-card-input"
          className="input-text"
          onKeyDown={EnterEvent(newCardSubmit)}
          />
      </CardElements.Content>
      <CardElements.Footer>
        <CardElements.Action title="CRIAR" action={newCardSubmit} />
      </CardElements.Footer>
    </CardElements.Main>
  )
}