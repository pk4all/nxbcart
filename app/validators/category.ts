import vine from '@vinejs/vine'
import { uniqueRule } from './rules/unique.js'

export const createCategoryValidator = vine.compile(
    vine.object({
      name: vine.string().trim(),
      slug: vine.string().trim().use(uniqueRule({ table: 'categories', column: 'slug' })),
      description: vine.string().trim().escape()
    })
)

export const editCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
   // slug: vine.string().trim().use(uniqueRule({ table: 'categories', column: 'slug' })),
    description: vine.string().trim().escape()
  })
)