import { useContext } from "react";
import { CardElements } from "../Card";
import { CardsContext } from "../../contexts/cards";
import { DateDiff } from "../../Utils/DateDiff";
import { ToastContext } from "../../contexts/toast";

export function UtilityCard() {
  const { removeAllCards, removeAllItems, cards } = useContext(CardsContext)
  const { success, error } = useContext(ToastContext)

  const removeCards = () => {
    removeAllCards()
    success('Cards removidos')
  }

  const removeItens = () => {
    removeAllItems()
    success('Itens removidos')
  }

  const copyItems = async () => {
    let text = ""

    cards.forEach(card => {
      text += `- ${card.description}\n`

      card.items.forEach(item => {
        text += `\t- ${DateDiff(item.timerUsed, item.createdAt)} - ${item.description}\n`
      })
    })

    try {
      await navigator.clipboard.writeText(text)
      success('Itens copiados')
    } catch (_) {
      error('Ocorreu um erro ao copiar os itens')
    }
  }

  return (
    <CardElements.Main>
      <CardElements.Content>
        <div className="utilityCard-container">
          <CardElements.Action action={() => copyItems()} title="COPIAR TODOS ITENS" />
          <CardElements.Action action={() => removeCards()} title="REMOVER TODOS CARDS" />
          <CardElements.Action action={() => removeItens()} title="REMOVER TODOS ITENS" />
        </div>
      </CardElements.Content>
    </CardElements.Main>
  )
}