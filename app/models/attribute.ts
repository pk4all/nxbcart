import { DateTime } from 'luxon'
import { BaseModel, column,hasMany,belongsTo } from '@adonisjs/lucid/orm'
import type { HasMany,BelongsTo } from '@adonisjs/lucid/types/relations'
import AttributesOption from '#models/attributes_option'
import slugify from 'slugify'
import Category from '#models/category'

export default class Attribute extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'category_id' })
  declare category_id:number

  @column()
  declare name: string
  @column()
  declare slug: string
  @column()
  declare type: string
  @column()
  declare required: boolean
  @column()
  declare status:boolean
  @column({ serializeAs: 'user_id' })
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @hasMany(() => AttributesOption, { foreignKey: 'attribute_id' })
  public attributesOptions!: HasMany<typeof AttributesOption>

  @belongsTo(() => Category, { foreignKey: 'category_id' })
  public category!: BelongsTo<typeof Category>
}