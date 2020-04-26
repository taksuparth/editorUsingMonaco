grammar interpreter;


options {
      language=JavaScript;
}

tokens {
  OPERATOR,
  ATOM,
  MODIFIER,
  TMODIFIER,
  CLAUSE,
  FIELD,
  FUZZY,
  BOOST,
  QNORMAL,
  QPHRASE,
  QPHRASETRUNC,
  QTRUNCATED,
  QRANGEIN,
  QRANGEEX,
  QANYTHING,
  QDATE
}

mainQ :
  sep? clause=clauseDefault sep? EOF
  ;

clauseDefault
  :
  //m:(a b AND c OR d OR e)
  // without duplicating the rules (but it allows recursion)
  clauseOr (sep? clauseOr)*
  ;

clauseOr
  :  clauseAnd (or_ clauseAnd)*
  ;

clauseAnd
  :  clauseNot (and_ clauseNot)*
  ;

clauseNot
  :  clauseNear (not_ clauseNear)*
  ;

clauseNear
  :  clauseONear (near_ clauseONear)*
  ;

clauseONear
  : clauseBasic (onear_ clauseBasic)*
  ;

clauseBasic
  :
  sep? ((or_|and_ |not_) (sep)?)? LPAREN clauseDefault sep? RPAREN term_modifier?
  | sep? atom
  ;

atom
  :
  field multi_value term_modifier?
  | field? value term_modifier?
  ;

field
  :
  TERM_NORMAL COLON sep?
  ;

value
  :
  range_term
  | keyword_list
  | normal
  | wildcard
  | quoted
  | quoted_truncated
  | QMARK
  | anything
  | STAR
  ;

anything
  :
  STAR COLON STAR
  ;

two_sided_range_term
  :
  start_type=(LBRACK|LCURLY)
  sep?
  (a=range_value)
  sep?
  ( TO? sep? b=range_value sep? )?
  end_type=(RBRACK|RCURLY)
  ;

range_term
  :
  two_sided_range_term
  ;

range_value
  :
  wildcard
  | quoted
  | quoted_truncated
  | date
  | normal
  | STAR
  ;

multi_value
  :
  LPAREN (clauseDefault COMMA? sep?)+ RPAREN
  ;
keyword_list
    :
    KEYWORD_LIST;

normal
  :
  TERM_NORMAL
  | NUMBER
  ;

wildcard
  :
  TERM_WILDCARD
  ;

quoted_truncated
  :
  PHRASE_ANYTHING
  ;

quoted  :
  PHRASE
  ;

modifier:
  PLUS
  | MINUS;


term_modifier :
  proximity
  ;

proximity :
  sep? TILDE
  ;

not_  :
  sep? AND sep? NOT
  | sep? NOT
  ;

and_  :
  sep? AND
  ;

or_   :
  sep? OR
  ;

near_   :
  sep? NEAR
  ;

onear_   :
  sep? ONEAR
  ;

date  :
  DATE_TOKEN
  ;

/* ================================================================
 * =                     LEXER                                    =
 * ================================================================
 */

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