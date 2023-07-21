import { Lexer } from 'chevrotain'

import { allTokens } from './tokens.js'

export const sqlLexer = new Lexer(allTokens)
