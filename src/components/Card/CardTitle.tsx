interface CardTitleProps {
  value: string
}
export function CardTitle({ value }: CardTitleProps) {
  return (
    <span className="card-title">{value}</span>
  )
}