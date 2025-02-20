import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'coupons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').nullable()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('code').unique().notNullable()
      table.enum('discount_type', ['percentage', 'fixed']).notNullable()
      table.integer('discount').notNullable()
      table.integer('max_discount').notNullable().defaultTo(0)
      table.integer('min_order').notNullable().defaultTo(0)
      table.integer('usage_limit').notNullable().defaultTo(0)
      table.integer('usage_per_user').notNullable().defaultTo(0)
      table.date('start_date').notNullable()
      table.date('end_date').notNullable()
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