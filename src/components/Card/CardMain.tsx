import { PropsWithChildren } from "react";

export function CardMain(props: PropsWithChildren) {
  return (
    <section className="card">
      {props.children}
    </section>
  )
}