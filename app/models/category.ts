import { DateTime } from 'luxon'
import { BaseModel, column,hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string
  @column()
  declare image:string
  @column()
  declare icon:string
  @column()
  declare description:string
  @column({ serializeAs: 'parent_id' })
  declare parentId: number
  @column()
  declare status:boolean

  @column({ serializeAs: 'short_index' })
  declare shortIndex: number
  @column({ serializeAs: 'user_id' })
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Category, { foreignKey: 'parentId' })
  public subCategories!: HasMany<typeof Category>
}