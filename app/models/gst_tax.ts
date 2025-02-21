import { DateTime } from 'luxon'
import { BaseModel, column,computed } from '@adonisjs/lucid/orm'

export default class GstTax extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare user_id: number
  @column({serializeAs:'tax_name'})
  declare tax_name: string
  
  @column({serializeAs:'tax_percentage'})
  declare tax_percentage: number

  @column()
  declare status: boolean
 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}