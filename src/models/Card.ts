import { BaseModel } from "./BaseModel"
import { Item } from "./Item"

export class Card extends BaseModel {
  private _items: Map<Item["id"], Item> = new Map()
  private _description: string

  public constructor(description: string) {
    super()
    
    this._description = description
  }

  public addItem(item: Item) {
    this._items.set(item.id, item)
  }

  public removeItem(id: string) {
    this._items.delete(id)
  }

  public get items() { return this._items }
  public get description() { return this._description }

  public set description(value: string)  { this._description = value }
}