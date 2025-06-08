interface CardCloseProps {
  action: () => void
}

export function CardClose({ action }: CardCloseProps) {
  return (
    <span className="card-close" onClick={() => action()}>&times;</span>
  )
}