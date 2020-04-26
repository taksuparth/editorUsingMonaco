import { CommonTokenStream, InputStream, Token, Parser, Lexer } from 'antlr4';
import { ErrorListener } from 'antlr4/error';
import { DefaultErrorStrategy } from 'antlr4/error/ErrorStrategy';
import { interpreterLexer } from '../antlr-generated/javascript/interpreterLexer.js';
import { interpreterParser } from '../antlr-generated/javascript/interpreterParser';

class ConsoleErrorListener extends ErrorListener {
  //@ts-ignore
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.log('BC ERROR ' + msg);
  }
}

export class Error {
  startLine: number;
  endLine: number;
  startCol: number;
  endCol: number;
  message: string;

  constructor(startLine: number, endLine: number, startCol: number, endCol: number, message: string) {
    this.startLine = startLine;
    this.endLine = endLine;
    this.startCol = startCol;
    this.endCol = endCol;
    this.message = message;
  }
}

class CollectorErrorListener extends ErrorListener {
  private errors: Error[] = [];

  constructor(errors: Error[]) {
    super();
    this.errors = errors;
  }

  //@ts-ignore
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.log('BC ERROR ' + msg);
    var endColumn = column + 1;
    if (offendingSymbol._text !== null) {
      endColumn = column + offendingSymbol._text.length;
    }
    this.errors.push(new Error(line, line, column, endColumn, msg));
  }
}

export function createLexer(input: string) {
  const chars = new InputStream(input);
  const lexer = new interpreterLexer(chars);

  //@ts-ignore
  lexer.strictMode = false;

  return lexer;
}

export function getTokens(input: string): Token[] {
  //@ts-ignore
  return createLexer(input).getAllTokens();
}

function createParser(input: string) {
  const lexer = createLexer(input);

  return createParserFromLexer(lexer);
}

//@ts-ignore
function createParserFromLexer(lexer) {
  const tokens = new CommonTokenStream(lexer);
  return new interpreterParser(tokens);
}

export function parseTreeStr(input: string) {
  const lexer = createLexer(input);
  //@ts-ignore
  lexer.removeErrorListeners();
  //@ts-ignore
  lexer.addErrorListener(new ConsoleErrorListener());

  const parser = createParserFromLexer(lexer);
  //@ts-ignore
  parser.removeErrorListeners();
  //@ts-ignore
  parser.addErrorListener(new ConsoleErrorListener());

  //@ts-ignore
  const tree = parser.compilationUnit();

  return tree.toStringTree(parser.ruleNames);
}

class InterpreterErrorStrategy extends DefaultErrorStrategy {
  reportUnwantedToken(recognizer: Parser) {
    //@ts-ignore
    return super.reportUnwantedToken(recognizer);
  }

  singleTokenDeletion(recognizer: Parser) {
    const nextTokenType = recognizer.getTokenStream().LA(2);
    //@ts-ignore
    if (recognizer.getTokenStream().LA(1) == interpreterParser.NL) {
      return null;
    }
    const expecting = this.getExpectedTokens(recognizer);
    //@ts-ignore
    if (expecting.contains(nextTokenType)) {
      this.reportUnwantedToken(recognizer);
      recognizer.consume(); // simply delete extra token
      // we want to return the token we're actually matching
      const matchedSymbol = recognizer.getCurrentToken();
      this.reportMatch(recognizer); // we know current token is correct
      return matchedSymbol;
    } else {
      return null;
    }
  }
  getExpectedTokens = function(recognizer: Parser) {
    return recognizer.getExpectedTokens();
  };

  reportMatch = (recognizer: Parser) => {
    //@ts-ignore
    this.endErrorCondition(recognizer);
  };
}

export function validate(input: string): Error[] {
  let errors: Error[] = [];

  const lexer = createLexer(input);
  //@ts-ignore
  lexer.removeErrorListeners();
  //@ts-ignore
  lexer.addErrorListener(new ConsoleErrorListener());

  const parser = createParserFromLexer(lexer);
  //@ts-ignore
  parser.removeErrorListeners();
  //@ts-ignore
  parser.addErrorListener(new CollectorErrorListener(errors));
  //@ts-ignore
  parser._errHandler = new InterpreterErrorStrategy();

  //@ts-ignore
  const tree = parser.mainQ();
  return errors;
}
