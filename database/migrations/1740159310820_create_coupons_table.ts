import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'coupons'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.tinyint('auto_apply').defaultTo(0).after('status')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('auto_apply')
    })
  }
}