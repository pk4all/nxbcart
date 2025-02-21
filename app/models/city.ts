import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
 
  @column()
  declare state_id: number
  @column()
  declare district_id: number

  @column()
  declare city_name: string
  @column()
  declare city_code: string
  @column()
  declare lat: string
  @column()
  declare long: string
  @column()
  declare pincode: number
  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}