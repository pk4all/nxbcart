import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_prices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id')
      table.float('price')
      table.float('sale_price')
      table.float('cost_per_item')
      table.float('margin')
      table.float('profit')
      table.tinyint('status').unsigned().notNullable().defaultTo(1) // 0=>Inctive, 1=> Active
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}