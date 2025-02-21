import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('product_code').nullable().after('model_name')
      table.string('HSN').nullable().after('product_code')
      table.string('GST').nullable().after('HSN')
      table.string('product_type').nullable().after('GST') // normal, special
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('product_code')
      table.dropColumn('HSN')
      table.dropColumn('GST')
    })
  }
}