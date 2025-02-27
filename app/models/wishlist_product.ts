import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class WishlistProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({ serializeAs: 'customer_id' })
  declare customer_id: number
 
  @column({ serializeAs: "product_id" })
  declare product_id: number
  @column({ serializeAs: "sale_price" })
  declare sale_price: number
  @column()
  declare note: string
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}