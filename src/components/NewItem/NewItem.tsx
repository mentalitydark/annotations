import { CardElements } from "../Card"
import { EnterEvent } from '../../Utils'
import { useNewItem } from './useNewItem'

export function NewItem() {
const { createItemSubmit, itemInputRef, cardSelectRef, cards } = useNewItem()

  return (
    <div className="new-item">
      <CardElements.Main>
        <CardElements.Header>
          <CardElements.Title value="Novo Item" />
        </CardElements.Header>
        <CardElements.Content>
          <select ref={cardSelectRef} name="card-item-select" id="card-item-select" defaultValue="" className="select">
            <option value="" disabled>Selecione um card</option>
            {
              Array
                .from(cards)
                .map(([key, card]) => <option key={key} value={card.id}>{card.description}</option>)
            }
          </select>
          <input
            ref={itemInputRef}
            type="text"
            name="new-input-input"
            className="input-text"
            placeholder="Descrição do item"
            onKeyDown={EnterEvent(createItemSubmit)}
            />
        </CardElements.Content>
        <CardElements.Footer>
          <CardElements.Action title="ADICIONAR" action={createItemSubmit} />
        </CardElements.Footer>
      </CardElements.Main>
    </div>
  )
}