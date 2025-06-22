import { Item as ItemModel } from "../../models";
import { Item } from "../Item";
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
  itens: Map<string, ItemModel>
}

export function Card({ title, id, itens }: CardProps) {
  const { deleteCard, itensCount } = useCard(id)

  return (
    <CardMain>
      <CardHeader>
        <CardTitle value={`${title} (${itensCount})`} />
        <CardClose action={() => deleteCard(id)} />
      </CardHeader>
      <CardContent>
        <div>
          {
            Array.from(itens).map(([, item]) => (
              <Item key={item.id} item={item} />
            ))
          }
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </CardMain>
  )
}