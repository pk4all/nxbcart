import { DateTime } from 'luxon'
import { BaseModel, column,computed } from '@adonisjs/lucid/orm'

export default class ShippingCharge extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column({serializeAs:'min_cart_amount'})
  declare min_cart_amount: number
  
  @column({serializeAs:'max_cart_amount'})
  declare max_cart_amount: number

  @column({serializeAs:'shipping_cost'})
  declare shipping_cost: number

  @column()
  declare status: boolean
 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}