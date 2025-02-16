import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('mobile').after('email')
      table.string('role').after('password')
      table.string('status').after('role')
      
    })
  }

  async down() {
    this.schema.alterTable(this.tableName,(table)=>{
      table.dropColumn('mobile')
      table.dropColumn('role')
      table.dropColumn('status')
    })
  }
}