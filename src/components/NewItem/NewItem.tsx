import { CardElements } from "../Card"
import { EnterEvent } from '../../Utils'
import { useNewItem } from './useNewItem'

export function NewItem() {
const { newItemSubmit, inputRef, selectRef, cards } = useNewItem()

  return (
    <CardElements.Main>
      <CardElements.Header>
        <CardElements.Title value="Novo Item" />
      </CardElements.Header>
      <CardElements.Content>
        <select ref={selectRef} name="card-item-select" id="card-item-select" defaultValue="" className="select">
          <option value="" disabled>Selecione um card</option>
          {
            Array
              .from(cards)
              .map(([key, card]) => <option key={key} value={card.id}>{card.description}</option>)
          }
        </select>
        <input
          ref={inputRef}
          type="text"
          name="new-input-input"
          className="input-text"
          onKeyDown={EnterEvent(newItemSubmit)}
          />
      </CardElements.Content>
      <CardElements.Footer>
        <CardElements.Action title="ADICIONAR" action={newItemSubmit} />
      </CardElements.Footer>
    </CardElements.Main>
  )
}