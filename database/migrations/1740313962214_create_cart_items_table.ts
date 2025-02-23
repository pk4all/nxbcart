import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cart_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cart_id')
      table.integer('product_id')
      table.string('product_name')
      table.string('product_slug')
      table.string('product_image')
      table.float('sale_price',10,2)
      table.float('total',10,2)
      table.integer('quantity')
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}