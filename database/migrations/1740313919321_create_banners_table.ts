import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'banners'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('sub_title')
      table.string('description').nullable()
      table.string('banner_url').nullable()
      table.string('image')
      table.string('thum_image')
      table.boolean('status').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}