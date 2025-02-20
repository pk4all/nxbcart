import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('parent_id').unsigned()
      table.string('name').notNullable()
      table.string('slug').notNullable()
      table.string('image').nullable()
      table.string('icon').nullable()
      table.text('description').nullable() 
      table.tinyint('status').unsigned().notNullable().defaultTo(1)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}