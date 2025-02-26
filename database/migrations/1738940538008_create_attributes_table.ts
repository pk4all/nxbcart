import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'attributes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category_id')
      table.string('name')
      table.string('slug')
      table.string('type')
      table.tinyint('required').unsigned().notNullable().defaultTo(0)
      table.tinyint('status').unsigned().notNullable().defaultTo(1)
      table.integer('user_id')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}