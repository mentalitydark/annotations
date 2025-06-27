interface CardCloseProps {
  action: () => void
}

export function CardClose({ action }: CardCloseProps) {
  return (
    <span className="card-close" onClick={() => action()}><i className="fa-solid fa-xmark"></i></span>
  )
}