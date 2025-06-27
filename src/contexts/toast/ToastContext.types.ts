export interface ToastContextInterface {
  warning: (text: string) => void
  error: (text: string) => void
  success: (text: string) => void
}

export enum ToastTypes {
  WARNING,
  ERROR,
  SUCCESS
}