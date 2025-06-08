export class BaseModel {

  private _id: string
  private _created_at: Date
  private _updated_at?: Date

  public constructor() {
    this._id = crypto.randomUUID()
    this._created_at = new Date()
  }

  public get id() { return this._id }
  public get createdAt() { return this._created_at }
  public get updatedAt(): Date|undefined { return this._updated_at }

  public set createdAt(value: Date) { this._created_at = value }
  public set updatedAt(value: Date) { this._updated_at = value }

}