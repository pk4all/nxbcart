import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'deals_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id')
      table.float('deal_price',10,2)
      table.string('deal_titel')
      table.integer('max_redemptions').defaultTo(0)
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table.boolean('status').notNullable().defaultTo(true)
      table.boolean('expired').notNullable().defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}