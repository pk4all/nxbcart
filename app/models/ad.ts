import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { ColorGridView } from 'ckeditor5'

export default class Ad extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({ serializeAs: "user_id" })
  declare user_id: number
  @column()
  declare size:string
  @column({serializeAs:"ad_type"})
  declare ad_type:string //

  @column()
  declare position:string

  @column()
  declare title:string

  
  @column({serializeAs:"sub_title"})
  declare sub_title:string
  
  @column()
  declare description:string
  
  @column({serializeAs:"banner_url"})
  declare banner_url:string

  @column()
  declare image:string
  @column({serializeAs:'thum_image'})
  declare thum_image:string
  @column({serializeAs:"start_date"})
  declare start_date:DateTime
  @column({serializeAs:"end_date"})
  declare end_date:DateTime
  
  @column()
  declare status: boolean
  @column()
  declare expired: boolean
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}