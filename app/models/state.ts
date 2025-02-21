import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class State extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare country_id: number
  @column()
  declare state_name: string
  @column()
  declare state_code: string
  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}