// Generated from interpreter.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by interpreterParser.
function interpreterListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

interpreterListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
interpreterListener.prototype.constructor = interpreterListener;

// Enter a parse tree produced by interpreterParser#mainQ.
interpreterListener.prototype.enterMainQ = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#mainQ.
interpreterListener.prototype.exitMainQ = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseDefault.
interpreterListener.prototype.enterClauseDefault = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseDefault.
interpreterListener.prototype.exitClauseDefault = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseOr.
interpreterListener.prototype.enterClauseOr = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseOr.
interpreterListener.prototype.exitClauseOr = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseAnd.
interpreterListener.prototype.enterClauseAnd = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseAnd.
interpreterListener.prototype.exitClauseAnd = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseNot.
interpreterListener.prototype.enterClauseNot = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseNot.
interpreterListener.prototype.exitClauseNot = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseNear.
interpreterListener.prototype.enterClauseNear = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseNear.
interpreterListener.prototype.exitClauseNear = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseONear.
interpreterListener.prototype.enterClauseONear = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseONear.
interpreterListener.prototype.exitClauseONear = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#clauseBasic.
interpreterListener.prototype.enterClauseBasic = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#clauseBasic.
interpreterListener.prototype.exitClauseBasic = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#atom.
interpreterListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#atom.
interpreterListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#field.
interpreterListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#field.
interpreterListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#value.
interpreterListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#value.
interpreterListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#anything.
interpreterListener.prototype.enterAnything = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#anything.
interpreterListener.prototype.exitAnything = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#two_sided_range_term.
interpreterListener.prototype.enterTwo_sided_range_term = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#two_sided_range_term.
interpreterListener.prototype.exitTwo_sided_range_term = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#range_term.
interpreterListener.prototype.enterRange_term = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#range_term.
interpreterListener.prototype.exitRange_term = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#range_value.
interpreterListener.prototype.enterRange_value = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#range_value.
interpreterListener.prototype.exitRange_value = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#multi_value.
interpreterListener.prototype.enterMulti_value = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#multi_value.
interpreterListener.prototype.exitMulti_value = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#keyword_list.
interpreterListener.prototype.enterKeyword_list = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#keyword_list.
interpreterListener.prototype.exitKeyword_list = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#normal.
interpreterListener.prototype.enterNormal = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#normal.
interpreterListener.prototype.exitNormal = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#wildcard.
interpreterListener.prototype.enterWildcard = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#wildcard.
interpreterListener.prototype.exitWildcard = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#quoted_truncated.
interpreterListener.prototype.enterQuoted_truncated = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#quoted_truncated.
interpreterListener.prototype.exitQuoted_truncated = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#quoted.
interpreterListener.prototype.enterQuoted = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#quoted.
interpreterListener.prototype.exitQuoted = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#modifier.
interpreterListener.prototype.enterModifier = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#modifier.
interpreterListener.prototype.exitModifier = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#term_modifier.
interpreterListener.prototype.enterTerm_modifier = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#term_modifier.
interpreterListener.prototype.exitTerm_modifier = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#proximity.
interpreterListener.prototype.enterProximity = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#proximity.
interpreterListener.prototype.exitProximity = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#not_.
interpreterListener.prototype.enterNot_ = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#not_.
interpreterListener.prototype.exitNot_ = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#and_.
interpreterListener.prototype.enterAnd_ = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#and_.
interpreterListener.prototype.exitAnd_ = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#or_.
interpreterListener.prototype.enterOr_ = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#or_.
interpreterListener.prototype.exitOr_ = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#near_.
interpreterListener.prototype.enterNear_ = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#near_.
interpreterListener.prototype.exitNear_ = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#onear_.
interpreterListener.prototype.enterOnear_ = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#onear_.
interpreterListener.prototype.exitOnear_ = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#date.
interpreterListener.prototype.enterDate = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#date.
interpreterListener.prototype.exitDate = function(ctx) {
};


// Enter a parse tree produced by interpreterParser#sep.
interpreterListener.prototype.enterSep = function(ctx) {
};

// Exit a parse tree produced by interpreterParser#sep.
interpreterListener.prototype.exitSep = function(ctx) {
};



exports.interpreterListener = interpreterListener;