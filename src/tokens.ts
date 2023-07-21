import { createToken } from 'chevrotain'

export const Identifier = createToken({
  name: 'Identifier',
  pattern: /[a-zA-Z]\w*/
})

export const Select = createToken({
  name: 'Select',
  pattern: /SELECT/,
  longer_alt: Identifier
})

export const allTokens = [Select, Identifier]
