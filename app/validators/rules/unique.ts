import { FieldContext } from '@vinejs/vine/types'
import vine from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'
/**
 * Options accepted by the unique rule
 */
type Options = {
  table: string
  column: string
  //id:number
}

/**
 * Implementation
 */
async function unique(
  value: unknown,
  options: Options,
  field: FieldContext
) {
  /**
   * We do not want to deal with non-string
   * values. The "string" rule will handle the
   * the validation.
   */
  if (typeof value !== 'string') {
    return
  }
  
  const row = await db
   .from(options.table)
   .select(options.column)
   .where(options.column, value)
   .first()

   
  if (row) {
    field.report(
      'The {{ field }} field is not unique',
      'unique',
      field
    )
  }
}

/**
 * Converting a function to a VineJS rule
 */
export const uniqueRule = vine.createRule(unique)
