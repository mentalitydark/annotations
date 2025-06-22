import { Item as ItemModel } from "../../models";
import { useItem } from "./useItem";

interface ItemProps {
  item: ItemModel
}

export function Item({ item }: ItemProps) {
  const { removeItem } = useItem(item)

  return (
    <div className="item-container">
      <span className="item-description">{item.description}</span>
      <div className="item-actions">
        <span className="item-action" onClick={() => removeItem()}>&times;</span>
      </div>
    </div>
  )
}