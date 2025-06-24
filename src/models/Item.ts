import { BaseModel } from "./BaseModel"

interface ItemProps {
  cardId: string
  timer: Date
}

export class Item extends BaseModel {

  private _description?: string
  private _cardId: string
  private _timerUsed: Date

  public constructor({ cardId, timer }: ItemProps) {
    super()

    this._cardId = cardId
    this._timerUsed = new Date(timer)
  }

  public get description(): string|undefined { return this._description }
  public get cardId(): string { return this._cardId }
  public get timerUsed(): Date { return this._timerUsed }
  
  public set description(value: string) { this._description = value }
  public set cardId(value: string) { this._cardId = value }
  public set timerUsed(value: Date) { this._timerUsed = value }

}