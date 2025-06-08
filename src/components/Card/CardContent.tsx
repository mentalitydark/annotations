import { PropsWithChildren } from "react";

export function CardContent(props: PropsWithChildren) {
  return (
    <div className="card-content">
      {props.children}
    </div>
  )
}