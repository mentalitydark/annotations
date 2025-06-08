import { Item } from "../../models";
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
  itens: Map<string, Item>
}

export function Card({ title, id, itens }: CardProps) {
  const { remove, itensCount } = useCard(id)

  return (
    <CardMain>
      <CardHeader>
        <CardTitle value={`${title} (${itensCount})`} />
        <CardClose action={() => remove(id)} />
      </CardHeader>
      <CardContent>
        <ul>
          {
            Array.from(itens).map(([, item]) => (
              <li key={item.id}>{item.id} - {item.description}</li>
            ))
          }
        </ul>
      </CardContent>
      <CardFooter></CardFooter>
    </CardMain>
  )
}