interface CardActionProps {
  title: string
  action: () => void
}

export function CardAction({ title, action }: CardActionProps) {
  return (
    <button className="card-action" onClick={action}>{title}</button>
  )
}