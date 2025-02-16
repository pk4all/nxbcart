import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('short_index').defaultTo(1).after('status')
      table.integer('user_id').after('short_index')
    })
  }

  async down() {
     this.schema.alterTable('categories', (table) => {
      table.dropColumn('short_index') // Remove the column if rolling back
    })
  }
}