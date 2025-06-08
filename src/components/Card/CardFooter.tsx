import { PropsWithChildren } from "react";

export function CardFooter(props: PropsWithChildren) {
  return (
    <div className="card-footer">
      {props.children}
    </div>
  )
}