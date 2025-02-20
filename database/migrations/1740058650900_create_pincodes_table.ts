import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pincodes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('state_id').unsigned().notNullable()
      table.integer('district_id').unsigned().notNullable()
      table.integer('city_id').unsigned().notNullable()
      table.string('pincode', 255).notNullable()
      table.string('pincode_name', 255).nullable()
      table.string('state_name', 255).nullable()
      table.string('district_name', 255).nullable()
      table.string('city_name', 255).nullable()
      table.string('country_name', 255).nullable()
      table.string('region', 255).nullable()
      table.string('division', 255).nullable()
      table.string('lat', 255).nullable()
      table.string('long', 255).nullable()
      table.string('area', 255).nullable()
      table.tinyint('delivery_status').notNullable().defaultTo(1)
      table.tinyint('status').notNullable().defaultTo(1)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}