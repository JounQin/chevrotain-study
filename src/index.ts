import { parser, toAstVisitor } from './parser.js'
import { sqlLexer } from './lexer'

export function parse(text: string) {
  const lexingResult = sqlLexer.tokenize(text)

  parser.input = lexingResult.tokens

  const cst = parser.selectStatement()

  if (parser.errors.length > 0) {
    throw Error(
      'Sad sad panda, parsing errors detected!\n' +
      parser.errors[0].message
    )
  }

  return toAstVisitor.visit(cst)
}
