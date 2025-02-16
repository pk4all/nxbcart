import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
export enum Status {
  Inactive = 0,
  Active = 1,
}
export enum IsDefault{
  No=0,
  Yes=1
}
export default class ProductImage extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({serializeAs:'product_id'})
  declare product_id:number;

  @column()
  declare name:string;
  @column()
  declare image:string;
  @column({serializeAs:'thum_image'})
  declare thum_image:string;
  @column({serializeAs:'full_url'})
  declare full_url:string;
  @column({serializeAs:'thum_url'})
  declare thum_url:string;
   
  @column({serializeAs:'is_default'})
  declare is_default: IsDefault;
  public get isDefaultText(): string {
    return this.is_default === IsDefault.Yes ? 'Yes' : 'No';
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