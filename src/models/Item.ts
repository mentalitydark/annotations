import { BaseModel } from "./BaseModel"

export class Item extends BaseModel {

  private _description?: string
  private _cardId: string

  public constructor(cardId: string) {
    super()

    this._cardId = cardId
  }

  public get description(): string|undefined { return this._description }
  public get cardId(): string { return this._cardId }
  
  public set description(value: string) { this._description = value }
  public set cardId(value: string) { this._cardId = value }

}