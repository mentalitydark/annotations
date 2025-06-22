import { CardElements } from "../Card"
import { EnterEvent } from '../../Utils'
import { useNewCard } from './useNewCard'

export function NewCard() {
  const { createCardSubmit, inputRef } = useNewCard()
  
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
          placeholder="Nome do Card"
          onKeyDown={EnterEvent(createCardSubmit)}
          />
      </CardElements.Content>
      <CardElements.Footer>
        <CardElements.Action title="CRIAR" action={createCardSubmit} />
      </CardElements.Footer>
    </CardElements.Main>
  )
}