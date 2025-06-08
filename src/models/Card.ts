import { BaseModel } from "./BaseModel"
import { Item } from "./Item"

export class Card extends BaseModel {
  private _itens: Map<Item["id"], Item> = new Map()
  private _description: string

  public constructor(description: string) {
    super()
    
    this._description = description
  }

  public addItem(item: Item) {
    this._itens.set(item.id, item)
  }

  public removeItem(id: string) {
    this._itens.delete(id)
  }

  public get itens() { return this._itens }
  public get description() { return this._description }

  public set description(value: string)  { this._description = value }
}