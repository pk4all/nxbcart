import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DealsProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: "user_id" })
  declare user_id: number

  @column({ serializeAs: "product_id" })
  declare product_id: number

  @column({ serializeAs: "deal_price" })
  declare deal_price: number

  @column({ serializeAs: "deal_titel" })
  declare deal_titel: string

  @column({ serializeAs: "max_redemptions" })
  declare max_redemptions: number

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