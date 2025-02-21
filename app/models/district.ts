import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class District extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare state_id: number
  @column()
  declare district_name: string
  @column()
  declare district_code: string
  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}