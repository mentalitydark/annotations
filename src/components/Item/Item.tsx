import { Item as ItemModel } from "../../models";
import { useItem } from "./useItem";

interface ItemProps {
  item: ItemModel
}

export function Item({ item }: ItemProps) {
  const { removeItem, timerDiff } = useItem(item)

  return (
    <div className="item-container">
      <span className="item-description">{timerDiff} - {item.description}</span>
      <div className="item-actions">
        <span className="item-action" onClick={() => removeItem()}><i className="fa-solid fa-trash"></i></span>
      </div>
    </div>
  )
}