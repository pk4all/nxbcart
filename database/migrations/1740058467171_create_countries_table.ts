import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'countries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('country_name', 255).notNullable()
      table.string('country_code', 255).nullable()
      table.string('country_flag', 255).nullable()
      table.string('currency', 255).nullable()
      table.string('currency_symbol', 255).nullable()
      table.string('currency_code', 255).nullable()
      table.string('phone_code', 255).nullable()
      table.string('time_zone', 255).nullable()
      table.tinyint('status').notNullable().defaultTo(1)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}