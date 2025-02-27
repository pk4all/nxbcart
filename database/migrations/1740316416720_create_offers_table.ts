import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'offers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
      table.integer('category_id')
      table.enum('offer_type', ['percentage', 'fixed']).notNullable()
      table.integer('discount').notNullable()
      table.string('offer_title')
      table.string('slug')
      table.string('offer_sub_title')
      table.string('offer_description')
      table.string('offer_image')
      table.string('offer_thum')
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table.boolean('status').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}