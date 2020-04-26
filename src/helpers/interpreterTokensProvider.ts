import {createLexer} from './parserFacade';
import {ErrorListener} from 'antlr4/error';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export class InterpreterState implements monaco.languages.IState {
    clone(): monaco.languages.IState {
        return new InterpreterState();
    }

    equals(other: monaco.languages.IState): boolean {
        return true;
    }

}

export class InterpreterTokensProvider implements monaco.languages.TokensProvider {
    getInitialState(): monaco.languages.IState {
        return new InterpreterState();
    }

    tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
        // So far we ignore the state, which is not great for performance reasons
        return tokensForLine(line);
    }
}

const EOF = -1;

class InterpreterToken implements monaco.languages.IToken {
    scopes: string;
    startIndex: number;

    constructor(ruleName: String, startIndex: number) {
        this.scopes = ruleName.toLowerCase() + ".interpreter";
        this.startIndex = startIndex;
    }
}

class InterpreterLineTokens implements monaco.languages.ILineTokens {
    endState: monaco.languages.IState;
    tokens: monaco.languages.IToken[];

    constructor(tokens: monaco.languages.IToken[]) {
        this.endState = new InterpreterState();
        this.tokens = tokens;
    }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
    let errorStartingPoints: number[] = [];

    class ErrorCollectorListener extends ErrorListener {
        //@ts-ignore
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            errorStartingPoints.push(column)
        }
    }

    const lexer = createLexer(input);
    //@ts-ignore
    lexer.removeErrorListeners();
    let errorListener = new ErrorCollectorListener();
    //@ts-ignore
    lexer.addErrorListener(errorListener);
    let done = false;
    let myTokens: monaco.languages.IToken[] = [];
    do {
      //@ts-ignore
        let token = lexer.nextToken();
        if (token == null) {
            done = true
        } else {
            // We exclude EOF
            if (token.type == EOF) {
                done = true;
            } else {
                let tokenTypeName = lexer.symbolicNames[token.type];
                //@ts-ignore
                let myToken = new InterpreterToken(tokenTypeName, token.column);
                myTokens.push(myToken);
            }
        }
    } while (!done);

    // Add all errors
    for (let e of errorStartingPoints) {
        myTokens.push(new InterpreterToken("error.interpreter", e));
    }
    myTokens.sort((a, b) => (a.startIndex > b.startIndex) ? 1 : -1)

    return new InterpreterLineTokens(myTokens);
}
