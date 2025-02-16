import { DateTime } from 'luxon'
import { BaseModel, column,hasOne,hasMany,belongsTo } from '@adonisjs/lucid/orm'
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
  declare category_id:number;
  @column()
  declare sub_category_id:number;

  @column()
  declare model_name: string;
  @column()
  declare tags: string;
  @column()
  declare warranty_summary: string;
  @column()
  declare covered_in_warranty: string;
  @column()
  declare sales_in_package: string;
  @column()
  declare key_features: string;
  @column()
  declare video_url: string;

  @column()
  declare featured_product: Featured;
  @column()
  declare top_product: TopProduct;
  @column()
  declare published_status: PublishedStatus;
  @column()
  declare status: Status;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  public get statusText(): string {
    return this.status === Status.Active ? 'Active' : 'Inactive';
  }

  public get publishedStatusText(): string {
    return this.published_status === PublishedStatus.Pending ? 'Pending' : this.published_status === PublishedStatus.Published?'Published':this.published_status === PublishedStatus.Draft?'Draft':'Suspended';
  }

  public get topProductText(): string {
    return this.top_product === TopProduct.Yes ? 'Yes' : 'No';
  }

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