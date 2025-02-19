import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').nullable()
      table.string('mobile').nullable()
      table.string('mobile_otp').nullable()
      table.tinyint('is_mobile_verified').unsigned().notNullable().defaultTo(0)
      table.string('email').nullable()
      table.string('email_otp').nullable()
      table.tinyint('is_email_verified').unsigned().notNullable().defaultTo(0)
      table.string('password').nullable()
      table.string('gender').nullable()
      table.string('dob').nullable()
      table.string('profile_image').nullable()
      table.tinyint('is_verified').unsigned().notNullable().defaultTo(0)
      table.tinyint('status').unsigned().notNullable().defaultTo(1)
      table.tinyint('is_registered').unsigned().notNullable().defaultTo(0)
      table.tinyint('is_profile_completed').unsigned().notNullable().defaultTo(0)
      table.tinyint('is_subscribed').unsigned().notNullable().defaultTo(0)
      table.timestamp('last_login_at').defaultTo(this.now())
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}