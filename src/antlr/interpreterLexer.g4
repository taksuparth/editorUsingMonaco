/* ================================================================
 * =                     LEXER                                    =
 * ================================================================
 */
lexer grammar interpreterLexer;

LPAREN  : '(';
RPAREN  : ')';
LBRACK  : '[';
RBRACK  : ']';
COLON   : ':' ;  //this must NOT be fragment
PLUS  : '+' ;
MINUS : ('-'|'!');
STAR  : '*' ;
QMARK  : '?'+ ;
fragment VBAR  : '|' ;
fragment AMPER : '&' ;
COMMA   : ',';
LCURLY  : '{' ;
RCURLY  : '}' ;
TILDE : '~' (WS+)? (INT+ ('.' INT+)?)?;
DQUOTE
  : '"';
TO  : 'TO';
/* We want to be case insensitive */
AND   : (('a' | 'A') ('n' | 'N') ('d' | 'D') | (AMPER AMPER?)) ;
OR  : (('o' | 'O') ('r' | 'R') | (VBAR VBAR?));
NOT   : ('n' | 'N') ('o' | 'O') ('t' | 'T');
NEAR   : ('n' | 'N') ('e' | 'E') ('a' | 'A') ('r' | 'R') (WS+)? '/' (WS+)? INT;
ONEAR   : ('o' | 'O') NEAR;
KEYWORD_LIST : '_keyword_list' LPAREN TERM_NORMAL (WS+)? ((WS+)? (TERM_NORMAL) (WS+)?)* COMMA (WS+)? (AND|OR) (WS+)? RPAREN;
sep : WS+;
WS  :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        | '\u3000'
        )
    ;
/*
fragment TERM_CHAR  :
     ~(' ' | '\t' | '\n' | '\r' | '\u3000'
      | '\\' | '\'' | '\"'
      | '(' | ')' | '[' | ']' | '{' | '}'
      | '+' | '-' | '!' | ':' | '~' | '^'
      | '*' | '|' | '&' | '?' | '\\\"' | '/'  //this line is not present in lucene StandardParser.jj
      );
*/
fragment INT: '0' .. '9';
fragment ESC_CHAR:  '\\' .;
fragment TERM_START_CHAR
  :
  (~(' ' | '\t' | '\n' | '\r' | '\u3000'
        | '"'
        | '(' | ')'
        | ':' | ','
        | '?' | '*' | '\\'
        )
   | ESC_CHAR );
fragment TERM_CHAR
  :
  (TERM_START_CHAR | '-' | '+')
  ;
NUMBER
  :
  INT+ ('.' INT+)?
  ;
DATE_TOKEN
  :
  INT INT? ('/'|'-'|'.') INT INT? ('/'|'-'|'.') INT INT (INT INT)?
  ;
TERM_NORMAL
  :
  TERM_START_CHAR ( TERM_CHAR )*
  ;
TERM_WILDCARD:
  (STAR|QMARK) (TERM_CHAR+ (QMARK|STAR))+ (TERM_CHAR)*
  | TERM_START_CHAR (TERM_CHAR* (QMARK|STAR))+ (TERM_CHAR)*
  | (STAR|QMARK) TERM_CHAR+
  ;
PHRASE
  :
  DQUOTE (ESC_CHAR|~('"'|'\\'|'?'|'*'))+ DQUOTE
  ;
PHRASE_ANYTHING :
  DQUOTE (ESC_CHAR|~('"'|'\\'))+ DQUOTE
  ;