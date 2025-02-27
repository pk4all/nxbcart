import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Offer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: "user_id" })
  declare user_id: number

  @column({ serializeAs: "category_id" })
  declare category_id: number

  @column({ serializeAs: "offer_type" })
  declare offer_type: string

  @column({ serializeAs: "discount" })
  declare discount: string

  @column({ serializeAs: "offer_title" })
  declare offer_title: string
  @column({ serializeAs: "slug" })
  declare slug: string

  @column({ serializeAs: "offer_sub_title" })
  declare offer_sub_title: string

  @column({ serializeAs: "offer_description" })
  declare offer_description: string

  @column({ serializeAs: "offer_image" })
  declare offer_image: string

  @column({ serializeAs: "offer_thum" })
  declare offer_thum: string

  @column({serializeAs:"start_date"})
  declare start_date:DateTime

  @column({serializeAs:"end_date"})
  declare end_date:DateTime

  @column()
  declare status: boolean
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}