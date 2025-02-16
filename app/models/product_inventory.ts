import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export enum Status {
  Inactive = 0,
  Active = 1,
}
export enum StockStatus {
  OutOfStock=0,
  InStock=1,
  OnBackorder=2
}
export default class ProductInventory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({serializeAs:'product_id'})
  declare product_id:number;

  @column()
  declare sku: string;
  @column()
  declare qty: number;

  @column({serializeAs:'stock_status'})
  declare stock_status: StockStatus;
  public get stockStatusText(): string {
    return this.stock_status === StockStatus.OutOfStock ? 'Out Of Stock' :this.stock_status === StockStatus.InStock?'In Stock' : 'On Backorder';
  }

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