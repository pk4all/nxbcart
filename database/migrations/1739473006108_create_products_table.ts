import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('slug')
      table.string('sku')
      table.integer('user_id')
      table.integer('category_id')
      table.integer('sub_category_id')
      table.string('model_name')
      table.string('tags').nullable()
      table.string('warranty_summary').nullable()
      table.string('covered_in_warranty').nullable()
      table.string('sales_in_package').nullable()
      table.string('key_features').nullable()
      table.string('video_url').nullable()
      table.tinyint('featured_product').defaultTo(1) //,['No','Yes']
      table.tinyint('top_product').defaultTo(1) //'No','Yes']
      table.tinyint('published_status').defaultTo(1) //['Pending', 'Published', 'Suspended','Draft']
      
      table.tinyint('status').unsigned().notNullable().defaultTo(1) // 0=>Inctive, 1=> Active
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}