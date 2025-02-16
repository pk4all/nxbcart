import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export enum Status {
  Inactive = 0,
  Active = 1,
}
export default class ProductPrice extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({serializeAs:'product_id'})
  declare product_id:number;

  @column()
  declare price:number;
  @column({serializeAs:'sale_price'})
  declare sale_price:number;
  @column({serializeAs:'cost_per_item'})
  declare cost_per_item:number;
  @column()
  declare margin:number;
  @column()
  declare profit:number;

  
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