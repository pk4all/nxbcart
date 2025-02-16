import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export enum Status {
  Inactive = 0,
  Active = 1,
}

export default class ProductSeo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({serializeAs:'product_id'})
  declare product_id:number;

  @column({serializeAs:'page_title'})
  declare page_title: string;
  @column({serializeAs:'meta_description'})
  declare meta_description: string;

  @column({serializeAs:'url_handle'})
  declare url_handle: string;

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