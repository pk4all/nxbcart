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
  declare discountType: 'percentage' | 'fixed'
  @column()
  declare discount: number
  @column({serializeAs:'max_discount'})
  declare maxDiscount: number
  @column({serializeAs:'min_order'})
  declare minOrder: number
  @column({serializeAs:'usage_limit'})
  declare usageLimit: number
  @column({serializeAs:'usage_per_user'})
  declare usagePerUser: number
  @column.date({serializeAs:'start_date'})
  declare startDate: DateTime
  @column.date({serializeAs:'end_date'})
  declare endDate: DateTime
  @column()
  declare status: boolean
  @column()
  declare expired: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

   @computed()
    public get discountTypeText(): string {
      return this.discountType === discountType.Percentage ? 'Percentage' : 'Fixed';
    }
}