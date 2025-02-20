import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('state_id').unsigned().notNullable()
      table.integer('district_id').unsigned().notNullable()
      table.string('city_name', 255).notNullable()
      table.string('city_code', 255).nullable()
      table.string('lat', 255).nullable()
      table.string('long', 255).nullable()
      table.string('pincode', 255).nullable()
      table.tinyint('status').notNullable().defaultTo(1)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}