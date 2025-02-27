import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'customer_id' })
  declare customer_id: number

  @column({ serializeAs: 'session_id' })
  declare session_id: string

  @column({ serializeAs: 'session_id' })
  declare cart_id: string
  @column({ serializeAs: 'total_price' })
  declare total_price: string
  @column({ serializeAs: 'total_quantity' })
  declare total_quantity: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}