import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Banner extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({ serializeAs: "user_id" })
  declare user_id: number
  
  @column()
  declare title:string

  @column({serializeAs:'sub_title'})
  declare sub_title:string

  @column()
  declare description:string

  @column({serializeAs:'banner_url'})
  declare banner_url:string
  @column()
  declare image:string
  @column({serializeAs:'thum_image'})
  declare thum_image:string

  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}