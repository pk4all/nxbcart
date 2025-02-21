import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare country_name: string
  @column()
  declare country_code: string
  @column()
  declare country_flag: string
  @column()
  declare currency: string 
  @column()
  declare currency_symbol: string
  @column()
  declare currency_code: string
  @column()
  declare phone_code: string
  @column()
  declare time_zone: string

  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}