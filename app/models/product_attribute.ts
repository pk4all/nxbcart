import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export enum Status {
  Inactive = 0,
  Active = 1,
}
export default class ProductAttribute extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({serializeAs:'product_id'})
  declare product_id:number;
  @column()
  declare name: string;
  @column()
  declare key: string;
  @column()
  declare value: string;
  @column()
  declare status: Status;
  public get statusText(): string {
    return this.status === Status.Active ? 'Active' : 'Inactive';
  }
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}