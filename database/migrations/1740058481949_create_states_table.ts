import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'states'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').unsigned().notNullable()
      table.string('state_name', 255).notNullable()
      table.string('state_code', 255).nullable()
      table.tinyint('status').notNullable().defaultTo(1)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}