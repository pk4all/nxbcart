import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Attribute from '#models/attribute'
export default class AttributesOption extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'attribute_id' })
  declare attribute_id: number
  @column()
  declare value: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Attribute)
  public attribute!: BelongsTo<typeof Attribute>

}