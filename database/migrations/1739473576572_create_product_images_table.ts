import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_images'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id')
      table.string('name')
      table.string('image')
      table.string('thum_image')
      table.string('full_url')
      table.string('thum_url')
      table.tinyint('is_default').defaultTo(0) // ['No','Yes']
      table.tinyint('status').unsigned().notNullable().defaultTo(1) // 0=>Inctive, 1=> Active
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}