import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class CartItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column({ serializeAs: 'cart_id' })
  declare cart_id: number
  @column({ serializeAs: 'product_id' })
  declare product_id: number

  @column({ serializeAs: 'product_name' })
  declare product_name: string
  
  @column({ serializeAs: 'product_slug' })
  declare product_slug: string
  @column({ serializeAs: 'product_image' })
  declare product_image: string
  @column({ serializeAs: 'sale_price' })
  declare sale_price: number

  @column({ serializeAs: 'total' })
  declare total: number

  @column({ serializeAs: 'quantity' })
  declare quantity: number
  
   
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}