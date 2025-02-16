import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export enum Status {
  Inactive = 0,
  Active = 1,
}
export default class ProductShipping extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({serializeAs:'product_id'})
  declare product_id:number;

  @column()
  declare weight:number;
  @column()
  declare length:number;
  @column()
  declare width:number;
  @column()
  declare height:number;
  

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