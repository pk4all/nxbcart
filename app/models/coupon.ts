import { DateTime } from 'luxon'
import { BaseModel, column,computed } from '@adonisjs/lucid/orm'
export enum discountType {
  Percentage = "percentage",
  Fixed = "fixed",
}

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare user_id: number
  @column()
  declare name: string
  @column()
  declare description: string
  @column()
  declare code: string
  @column({serializeAs:'discount_type'})
  declare discount_type: 'percentage' | 'fixed'
  @column()
  declare discount: number
  @column({serializeAs:'max_discount'})
  declare max_discount: number
  @column({serializeAs:'min_order'})
  declare min_order: number
  @column({serializeAs:'usage_limit'})
  declare usage_limit: number
  @column({serializeAs:'usage_per_user'})
  declare usage_per_user: number
  @column.date({serializeAs:'start_date'})
  declare start_date: DateTime
  @column.date({serializeAs:'end_date'})
  declare end_date: DateTime
  @column()
  declare status: boolean
  @column({serializeAs:'auto_apply'})
  declare auto_apply: boolean
  @column()
  declare expired: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

   @computed()
    public get discountTypeText(): string {
      return this.discount_type === discountType.Percentage ? 'Percentage' : 'Fixed';
    }
}