import { DateTime } from 'luxon'
import { BaseModel, column,hasOne,hasMany,belongsTo,computed } from '@adonisjs/lucid/orm'
import type { HasMany,BelongsTo,HasOne } from '@adonisjs/lucid/types/relations'
import Category from '#models/category'
import ProductDescription from '#models/product_description'
import ProductShipping from '#models/product_shipping'
import ProductSeo from '#models/product_seo'
import ProductPrice from '#models/product_price'
import ProductInventory from '#models/product_inventory'
import ProductImage from '#models/product_image'
import ProductAttribute from '#models/product_attribute'

export enum Status {
  Inactive = 0,
  Active = 1,
}
export enum Featured{
  No=0,
  Yes=1
}

export enum TopProduct{
  No=0,
  Yes=1
}
export enum PublishedStatus{
  Pending=0, 
  Published=1, 
  Suspended=2,
  Draft=3
}

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare name: string;
  @column()
  declare slug: string;

  @column()
  declare sku: string;

  @column()
  declare HSN: string;
  @column()
  declare GST: string;

  @column({serializeAs:'product_code'})
  declare product_code: string;

  @column({serializeAs:'product_type'})
  declare product_type: string;
  

  @column({serializeAs:"user_id"})
  declare user_id:number;
  @column({serializeAs:"category_id"})
  declare category_id:number;
  @column({serializeAs:"sub_category_id"})
  declare sub_category_id:number;

  @column({serializeAs:'model_name'})
  declare model_name: string;
  @column()
  declare tags: string;
  @column({serializeAs:'warranty_summary'})
  declare warranty_summary: string;
  @column({serializeAs:'covered_in_warranty'})
  declare covered_in_warranty: string;
  @column({serializeAs:'sales_in_package'})
  declare sales_in_package: string;
  @column({serializeAs:'key_features'})
  declare key_features: string;
  @column({serializeAs:'video_url'})
  declare video_url: string;

  @column({serializeAs:"featured_product"})
  declare featured_product: Featured;
  @column({serializeAs:"top_product"})
  declare top_product: TopProduct;
  @column({serializeAs:"published_status"})
  declare published_status: PublishedStatus;
  @column()
  declare status: Status;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @computed()
  public get statusText(): string {
    return this.status === Status.Active ? 'Active' : 'Inactive';
  }

  @computed()
  public get publishedStatusText(): string {
    return this.published_status === PublishedStatus.Pending ? 'Pending' : this.published_status === PublishedStatus.Published?'Published':this.published_status === PublishedStatus.Draft?'Draft':'Suspended';
  }

  @computed()
  public get topProductText(): string {
    return this.top_product === TopProduct.Yes ? 'Yes' : 'No';
  }

  @computed()
  public get featuredProductText(): string {
    return this.featured_product === Featured.Yes ? 'Yes' : 'No';
  }

  @hasOne(() => ProductDescription, { foreignKey: 'product_id' })
  public productDescription!: HasOne<typeof ProductDescription>

  @hasOne(() => ProductShipping, { foreignKey: 'product_id' })
  public productShipping!: HasOne<typeof ProductShipping>
  
  @hasOne(() => ProductSeo, { foreignKey: 'product_id' })
  public productSeo!: HasOne<typeof ProductSeo>

  @hasOne(() => ProductPrice, { foreignKey: 'product_id' })
  public productPrice!: HasOne<typeof ProductPrice>

  @hasOne(() => ProductInventory, { foreignKey: 'product_id' })
  public productInventory!: HasOne<typeof ProductInventory>

  @hasMany(() => ProductImage, { foreignKey: 'product_id' })
  public productImages!: HasMany<typeof ProductImage>

  @hasMany(() => ProductAttribute, { foreignKey: 'product_id' })
  public productAttributes!: HasMany<typeof ProductAttribute>

  @belongsTo(() => Category, { foreignKey: 'category_id' })
  public category!: BelongsTo<typeof Category>
  @belongsTo(() => Category, { foreignKey: 'sub_category_id' })
  public subCategory!: BelongsTo<typeof Category>
  

}