import { PropsWithChildren } from "react";

export function CardHeader(props: PropsWithChildren) {
  return (
    <div className="card-header">
      {props.children}
    </div>
  )
}