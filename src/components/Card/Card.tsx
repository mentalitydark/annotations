import { Item as ItemModel } from "../../models";
import { Item } from "../Item";
import { CardAction } from "./CardAction";
import { CardClose } from "./CardClose";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardMain } from "./CardMain";
import { CardTitle } from "./CardTitle";
import { useCard } from "./useCard";

interface CardProps {
  title: string
  id: string
  items: Map<string, ItemModel>
}

export function Card({ title, id, items }: CardProps) {
  const { deleteCard, itemsCount, copyItems } = useCard(id, items)

  return (
    <CardMain>
      <CardHeader>
        <CardTitle value={`${title} (${itemsCount})`} />
        <CardClose action={() => deleteCard(id)} />
      </CardHeader>
      <CardContent>
        <div>
          {
            Array.from(items).map(([, item]) => (
              <Item key={item.id} item={item} />
            ))
          }
        </div>
      </CardContent>
      <CardFooter>
        <CardAction title="COPIAR ITENS" action={copyItems} />
      </CardFooter>
    </CardMain>
  )
}