import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pincode extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare state_id: number
  @column()
  declare district_id: number
  @column()
  declare city_id: number
  @column()
  declare pincode: number
  @column()
  declare pincode_name: number
  @column()
  declare state_name : string
  @column()
  declare district_name : string
  @column()
  declare city_name : string
  @column()
  declare country_name : string
  @column()
  declare region : string
  @column()
  declare division : string
  @column()
  declare area : string
  @column()
  declare delivery_status : boolean
  @column()
  declare status: boolean
  @column()
  declare lat: string
  @column()
  declare long: string
 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}