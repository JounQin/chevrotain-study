import { CstNode, CstParser } from 'chevrotain'

import { allTokens } from './tokens.js'

export class SQLParser extends CstParser {
  constructor() {
    super(allTokens)

    this.performSelfAnalysis()
  }

  declare selectStatement: () => CstNode
}

export const parser = new SQLParser()

export const BaseSQLVisitor = parser.getBaseCstVisitorConstructor()

export class SQLToAstVisitor extends BaseSQLVisitor {
  constructor() {
    super()

    this.validateVisitor()
  }
}

export const toAstVisitor = new SQLToAstVisitor()
