import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { DbRememberMeTokensProvider } from '@adonisjs/auth/session'
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email','mobile'],
  passwordColumnName: 'password',
})
export default class Customer extends compose(BaseModel, AuthFinder) {
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(Customer)
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string

  @column()
  declare mobile:string
  @column({serializeAs:null})
  declare mobile_otp:string
  @column({serializeAs:'is_mobile_verified'})
  declare is_mobile_verified:boolean
  
  @column()
  declare email:string
  @column({serializeAs:null})
  declare email_otp:string
  @column({serializeAs:'is_email_verified'})
  declare is_email_verified:boolean
  
  @column({serializeAs:null})
  declare password:string

  @column()
  declare gender:string

  @column()
  declare dob:string

  @column({serializeAs:'profile_image'})
  declare profile_image:string

  @column({serializeAs:'is_verified'})
  declare is_verified:boolean

  @column({serializeAs:'status'})
  declare status:boolean
  @column({serializeAs:'is_registered'})
  declare is_registered:boolean
  @column({serializeAs:'is_profile_completed'})
  declare is_profile_completed:boolean
  
  @column({serializeAs:'is_subscribed'})
  declare is_subscribed:boolean
  
  @column.dateTime({ autoCreate: true,serializeAs:'last_login_at' })
  declare lastLoginAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static accessTokens = DbAccessTokensProvider.forModel(Customer,{
    expiresIn: '30 days',
    prefix: 'nxb_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })
}