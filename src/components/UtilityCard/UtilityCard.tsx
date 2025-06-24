import { useContext } from "react";
import { CardElements } from "../Card";
import { CardsContext } from "../../contexts/cards";
import { DateDiff } from "../../Utils/DateDiff";

export function UtilityCard() {
  const { removeAllCards, removeAllItems, cards } = useContext(CardsContext)

  const copyItems = () => {
    let text = ""

    cards.forEach(card => {
      text += `- ${card.description}\n`

      card.items.forEach(item => {
        text += `\t- ${DateDiff(item.timerUsed, item.createdAt)} - ${item.description}\n`
      })
    })

    navigator.clipboard.writeText(text)
  }

  return (
    <CardElements.Main>
      <CardElements.Content>
        <div className="utilityCard-container">
          <CardElements.Action action={() => copyItems()} title="COPIAR TODOS ITENS" />
          <CardElements.Action action={() => removeAllCards()} title="REMOVER TODOS CARDS" />
          <CardElements.Action action={() => removeAllItems()} title="REMOVER TODOS ITENS" />
        </div>
      </CardElements.Content>
    </CardElements.Main>
  )
}