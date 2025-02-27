import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ads'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
      table.enum('size', ['large', 'medium','small']).notNullable().defaultTo('large')
      table.enum('ad_type', ['banner', 'video','text','popup']).notNullable().defaultTo('banner')
      table.enum('position', ['header', 'footer','sidebar','middle','inproduct']).notNullable().defaultTo('header')
      table.string('title')
      table.string('sub_title')
      table.string('description').nullable()
      table.string('banner_url').nullable()
      table.string('image')
      table.string('thum_image')
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