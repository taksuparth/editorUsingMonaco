// Generated from interpreter.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "interpreter.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u0129\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0003\u0002\u0005\u0002B\n\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002F\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0005\u0003L\n\u0003\u0003\u0003\u0007\u0003O\n\u0003\f",
    "\u0003\u000e\u0003R\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004X\n\u0004\f\u0004\u000e\u0004[\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005a\n\u0005\f\u0005",
    "\u000e\u0005d\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006j\n\u0006\f\u0006\u000e\u0006m\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007s\n\u0007\f\u0007\u000e",
    "\u0007v\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b|\n\b\f\b",
    "\u000e\b\u007f\u000b\b\u0003\t\u0005\t\u0082\n\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u0087\n\t\u0003\t\u0005\t\u008a\n\t\u0005\t\u008c\n\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u0091\n\t\u0003\t\u0003\t\u0005\t\u0095\n",
    "\t\u0003\t\u0005\t\u0098\n\t\u0003\t\u0005\t\u009b\n\t\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u00a0\n\n\u0003\n\u0005\n\u00a3\n\n\u0003\n\u0003",
    "\n\u0005\n\u00a7\n\n\u0005\n\u00a9\n\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00ae\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00b9\n\f\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005\u000e\u00c1\n\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00c5\n\u000e\u0003\u000e\u0005\u000e",
    "\u00c8\n\u000e\u0003\u000e\u0005\u000e\u00cb\n\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00cf\n\u000e\u0005\u000e\u00d1\n\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00dd\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00e2\n\u0011\u0003\u0011",
    "\u0005\u0011\u00e5\n\u0011\u0006\u0011\u00e7\n\u0011\r\u0011\u000e\u0011",
    "\u00e8\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0005",
    "\u0019\u00fc\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0005\u001a",
    "\u0101\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0105\n\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u0109\n\u001a\u0003\u001a\u0005\u001a",
    "\u010c\n\u001a\u0003\u001b\u0005\u001b\u010f\n\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0005\u001c\u0114\n\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0005\u001d\u0119\n\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0005\u001e\u011e\n\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0006 \u0125\n \r \u000e \u0126\u0003 \u0002\u0002",
    "!\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>\u0002\u0006\u0004\u0002\u0005\u0005\r",
    "\r\u0004\u0002\u0006\u0006\u000e\u000e\u0004\u0002\u0019\u0019\u001b",
    "\u001b\u0003\u0002\b\t\u0002\u0140\u0002A\u0003\u0002\u0002\u0002\u0004",
    "I\u0003\u0002\u0002\u0002\u0006S\u0003\u0002\u0002\u0002\b\\\u0003\u0002",
    "\u0002\u0002\ne\u0003\u0002\u0002\u0002\fn\u0003\u0002\u0002\u0002\u000e",
    "w\u0003\u0002\u0002\u0002\u0010\u009a\u0003\u0002\u0002\u0002\u0012",
    "\u00a8\u0003\u0002\u0002\u0002\u0014\u00aa\u0003\u0002\u0002\u0002\u0016",
    "\u00b8\u0003\u0002\u0002\u0002\u0018\u00ba\u0003\u0002\u0002\u0002\u001a",
    "\u00be\u0003\u0002\u0002\u0002\u001c\u00d4\u0003\u0002\u0002\u0002\u001e",
    "\u00dc\u0003\u0002\u0002\u0002 \u00de\u0003\u0002\u0002\u0002\"\u00ec",
    "\u0003\u0002\u0002\u0002$\u00ee\u0003\u0002\u0002\u0002&\u00f0\u0003",
    "\u0002\u0002\u0002(\u00f2\u0003\u0002\u0002\u0002*\u00f4\u0003\u0002",
    "\u0002\u0002,\u00f6\u0003\u0002\u0002\u0002.\u00f8\u0003\u0002\u0002",
    "\u00020\u00fb\u0003\u0002\u0002\u00022\u010b\u0003\u0002\u0002\u0002",
    "4\u010e\u0003\u0002\u0002\u00026\u0113\u0003\u0002\u0002\u00028\u0118",
    "\u0003\u0002\u0002\u0002:\u011d\u0003\u0002\u0002\u0002<\u0121\u0003",
    "\u0002\u0002\u0002>\u0124\u0003\u0002\u0002\u0002@B\u0005> \u0002A@",
    "\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002CE\u0005\u0004\u0003\u0002DF\u0005> \u0002ED\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GH\u0007\u0002",
    "\u0002\u0003H\u0003\u0003\u0002\u0002\u0002IP\u0005\u0006\u0004\u0002",
    "JL\u0005> \u0002KJ\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002",
    "LM\u0003\u0002\u0002\u0002MO\u0005\u0006\u0004\u0002NK\u0003\u0002\u0002",
    "\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002",
    "\u0002\u0002Q\u0005\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "SY\u0005\b\u0005\u0002TU\u00056\u001c\u0002UV\u0005\b\u0005\u0002VX",
    "\u0003\u0002\u0002\u0002WT\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\u0007\u0003",
    "\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\b\u0005\n\u0006\u0002",
    "]^\u00054\u001b\u0002^_\u0005\n\u0006\u0002_a\u0003\u0002\u0002\u0002",
    "`]\u0003\u0002\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002c\t\u0003\u0002\u0002\u0002db\u0003",
    "\u0002\u0002\u0002ek\u0005\f\u0007\u0002fg\u00052\u001a\u0002gh\u0005",
    "\f\u0007\u0002hj\u0003\u0002\u0002\u0002if\u0003\u0002\u0002\u0002j",
    "m\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002",
    "\u0002l\u000b\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002nt\u0005",
    "\u000e\b\u0002op\u00058\u001d\u0002pq\u0005\u000e\b\u0002qs\u0003\u0002",
    "\u0002\u0002ro\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\r\u0003\u0002\u0002\u0002",
    "vt\u0003\u0002\u0002\u0002w}\u0005\u0010\t\u0002xy\u0005:\u001e\u0002",
    "yz\u0005\u0010\t\u0002z|\u0003\u0002\u0002\u0002{x\u0003\u0002\u0002",
    "\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003",
    "\u0002\u0002\u0002~\u000f\u0003\u0002\u0002\u0002\u007f}\u0003\u0002",
    "\u0002\u0002\u0080\u0082\u0005> \u0002\u0081\u0080\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u008b\u0003\u0002\u0002",
    "\u0002\u0083\u0087\u00056\u001c\u0002\u0084\u0087\u00054\u001b\u0002",
    "\u0085\u0087\u00052\u001a\u0002\u0086\u0083\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002",
    "\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u008a\u0005> \u0002\u0089",
    "\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a",
    "\u008c\u0003\u0002\u0002\u0002\u008b\u0086\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0007\u0003\u0002\u0002\u008e\u0090\u0005\u0004\u0003\u0002\u008f",
    "\u0091\u0005> \u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0090\u0091",
    "\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094",
    "\u0007\u0004\u0002\u0002\u0093\u0095\u0005.\u0018\u0002\u0094\u0093",
    "\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u009b",
    "\u0003\u0002\u0002\u0002\u0096\u0098\u0005> \u0002\u0097\u0096\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0003",
    "\u0002\u0002\u0002\u0099\u009b\u0005\u0012\n\u0002\u009a\u0081\u0003",
    "\u0002\u0002\u0002\u009a\u0097\u0003\u0002\u0002\u0002\u009b\u0011\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0005\u0014\u000b\u0002\u009d\u009f\u0005",
    " \u0011\u0002\u009e\u00a0\u0005.\u0018\u0002\u009f\u009e\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a9\u0003\u0002",
    "\u0002\u0002\u00a1\u00a3\u0005\u0014\u000b\u0002\u00a2\u00a1\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002",
    "\u0002\u0002\u00a4\u00a6\u0005\u0016\f\u0002\u00a5\u00a7\u0005.\u0018",
    "\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002",
    "\u0002\u00a7\u00a9\u0003\u0002\u0002\u0002\u00a8\u009c\u0003\u0002\u0002",
    "\u0002\u00a8\u00a2\u0003\u0002\u0002\u0002\u00a9\u0013\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0007\u001b\u0002\u0002\u00ab\u00ad\u0007\u0007\u0002",
    "\u0002\u00ac\u00ae\u0005> \u0002\u00ad\u00ac\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u0015\u0003\u0002\u0002\u0002",
    "\u00af\u00b9\u0005\u001c\u000f\u0002\u00b0\u00b9\u0005\"\u0012\u0002",
    "\u00b1\u00b9\u0005$\u0013\u0002\u00b2\u00b9\u0005&\u0014\u0002\u00b3",
    "\u00b9\u0005*\u0016\u0002\u00b4\u00b9\u0005(\u0015\u0002\u00b5\u00b9",
    "\u0007\u000b\u0002\u0002\u00b6\u00b9\u0005\u0018\r\u0002\u00b7\u00b9",
    "\u0007\n\u0002\u0002\u00b8\u00af\u0003\u0002\u0002\u0002\u00b8\u00b0",
    "\u0003\u0002\u0002\u0002\u00b8\u00b1\u0003\u0002\u0002\u0002\u00b8\u00b2",
    "\u0003\u0002\u0002\u0002\u00b8\u00b3\u0003\u0002\u0002\u0002\u00b8\u00b4",
    "\u0003\u0002\u0002\u0002\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b6",
    "\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u0017",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\n\u0002\u0002\u00bb\u00bc",
    "\u0007\u0007\u0002\u0002\u00bc\u00bd\u0007\n\u0002\u0002\u00bd\u0019",
    "\u0003\u0002\u0002\u0002\u00be\u00c0\t\u0002\u0002\u0002\u00bf\u00c1",
    "\u0005> \u0002\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003",
    "\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0005",
    "\u001e\u0010\u0002\u00c3\u00c5\u0005> \u0002\u00c4\u00c3\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00d0\u0003\u0002",
    "\u0002\u0002\u00c6\u00c8\u0007\u0011\u0002\u0002\u00c7\u00c6\u0003\u0002",
    "\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00ca\u0003\u0002",
    "\u0002\u0002\u00c9\u00cb\u0005> \u0002\u00ca\u00c9\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002",
    "\u0002\u00cc\u00ce\u0005\u001e\u0010\u0002\u00cd\u00cf\u0005> \u0002",
    "\u00ce\u00cd\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002",
    "\u00cf\u00d1\u0003\u0002\u0002\u0002\u00d0\u00c7\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\t\u0003\u0002\u0002\u00d3\u001b\u0003\u0002\u0002\u0002",
    "\u00d4\u00d5\u0005\u001a\u000e\u0002\u00d5\u001d\u0003\u0002\u0002\u0002",
    "\u00d6\u00dd\u0005&\u0014\u0002\u00d7\u00dd\u0005*\u0016\u0002\u00d8",
    "\u00dd\u0005(\u0015\u0002\u00d9\u00dd\u0005<\u001f\u0002\u00da\u00dd",
    "\u0005$\u0013\u0002\u00db\u00dd\u0007\n\u0002\u0002\u00dc\u00d6\u0003",
    "\u0002\u0002\u0002\u00dc\u00d7\u0003\u0002\u0002\u0002\u00dc\u00d8\u0003",
    "\u0002\u0002\u0002\u00dc\u00d9\u0003\u0002\u0002\u0002\u00dc\u00da\u0003",
    "\u0002\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd\u001f\u0003",
    "\u0002\u0002\u0002\u00de\u00e6\u0007\u0003\u0002\u0002\u00df\u00e1\u0005",
    "\u0004\u0003\u0002\u00e0\u00e2\u0007\f\u0002\u0002\u00e1\u00e0\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e4\u0003",
    "\u0002\u0002\u0002\u00e3\u00e5\u0005> \u0002\u00e4\u00e3\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e7\u0003\u0002",
    "\u0002\u0002\u00e6\u00df\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002",
    "\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002",
    "\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007\u0004",
    "\u0002\u0002\u00eb!\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\u0017",
    "\u0002\u0002\u00ed#\u0003\u0002\u0002\u0002\u00ee\u00ef\t\u0004\u0002",
    "\u0002\u00ef%\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007\u001c\u0002",
    "\u0002\u00f1\'\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007\u001e\u0002",
    "\u0002\u00f3)\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007\u001d\u0002",
    "\u0002\u00f5+\u0003\u0002\u0002\u0002\u00f6\u00f7\t\u0005\u0002\u0002",
    "\u00f7-\u0003\u0002\u0002\u0002\u00f8\u00f9\u00050\u0019\u0002\u00f9",
    "/\u0003\u0002\u0002\u0002\u00fa\u00fc\u0005> \u0002\u00fb\u00fa\u0003",
    "\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0007\u000f\u0002\u0002\u00fe1\u0003",
    "\u0002\u0002\u0002\u00ff\u0101\u0005> \u0002\u0100\u00ff\u0003\u0002",
    "\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002",
    "\u0002\u0002\u0102\u0104\u0007\u0012\u0002\u0002\u0103\u0105\u0005>",
    " \u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002",
    "\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u010c\u0007\u0014",
    "\u0002\u0002\u0107\u0109\u0005> \u0002\u0108\u0107\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002",
    "\u0002\u010a\u010c\u0007\u0014\u0002\u0002\u010b\u0100\u0003\u0002\u0002",
    "\u0002\u010b\u0108\u0003\u0002\u0002\u0002\u010c3\u0003\u0002\u0002",
    "\u0002\u010d\u010f\u0005> \u0002\u010e\u010d\u0003\u0002\u0002\u0002",
    "\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0007\u0012\u0002\u0002\u01115\u0003\u0002\u0002\u0002",
    "\u0112\u0114\u0005> \u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115",
    "\u0116\u0007\u0013\u0002\u0002\u01167\u0003\u0002\u0002\u0002\u0117",
    "\u0119\u0005> \u0002\u0118\u0117\u0003\u0002\u0002\u0002\u0118\u0119",
    "\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011b",
    "\u0007\u0015\u0002\u0002\u011b9\u0003\u0002\u0002\u0002\u011c\u011e",
    "\u0005> \u0002\u011d\u011c\u0003\u0002\u0002\u0002\u011d\u011e\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0007",
    "\u0016\u0002\u0002\u0120;\u0003\u0002\u0002\u0002\u0121\u0122\u0007",
    "\u001a\u0002\u0002\u0122=\u0003\u0002\u0002\u0002\u0123\u0125\u0007",
    "\u0018\u0002\u0002\u0124\u0123\u0003\u0002\u0002\u0002\u0125\u0126\u0003",
    "\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0126\u0127\u0003",
    "\u0002\u0002\u0002\u0127?\u0003\u0002\u0002\u0002-AEKPYbkt}\u0081\u0086",
    "\u0089\u008b\u0090\u0094\u0097\u009a\u009f\u00a2\u00a6\u00a8\u00ad\u00b8",
    "\u00c0\u00c4\u00c7\u00ca\u00ce\u00d0\u00dc\u00e1\u00e4\u00e8\u00fb\u0100",
    "\u0104\u0108\u010b\u010e\u0113\u0118\u011d\u0126"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "'+'", null, 
                     "'*'", null, "','", "'{'", "'}'", null, "'\"'", "'TO'" ];

var symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COLON", 
                      "PLUS", "MINUS", "STAR", "QMARK", "COMMA", "LCURLY", 
                      "RCURLY", "TILDE", "DQUOTE", "TO", "AND", "OR", "NOT", 
                      "NEAR", "ONEAR", "KEYWORD_LIST", "WS", "NUMBER", "DATE_TOKEN", 
                      "TERM_NORMAL", "TERM_WILDCARD", "PHRASE", "PHRASE_ANYTHING", 
                      "OPERATOR", "ATOM", "MODIFIER", "TMODIFIER", "CLAUSE", 
                      "FIELD", "FUZZY", "BOOST", "QNORMAL", "QPHRASE", "QPHRASETRUNC", 
                      "QTRUNCATED", "QRANGEIN", "QRANGEEX", "QANYTHING", 
                      "QDATE" ];

var ruleNames =  [ "mainQ", "clauseDefault", "clauseOr", "clauseAnd", "clauseNot", 
                   "clauseNear", "clauseONear", "clauseBasic", "atom", "field", 
                   "value", "anything", "two_sided_range_term", "range_term", 
                   "range_value", "multi_value", "keyword_list", "normal", 
                   "wildcard", "quoted_truncated", "quoted", "modifier", 
                   "term_modifier", "proximity", "not_", "and_", "or_", 
                   "near_", "onear_", "date", "sep" ];

function interpreterParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

interpreterParser.prototype = Object.create(antlr4.Parser.prototype);
interpreterParser.prototype.constructor = interpreterParser;

Object.defineProperty(interpreterParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

interpreterParser.EOF = antlr4.Token.EOF;
interpreterParser.LPAREN = 1;
interpreterParser.RPAREN = 2;
interpreterParser.LBRACK = 3;
interpreterParser.RBRACK = 4;
interpreterParser.COLON = 5;
interpreterParser.PLUS = 6;
interpreterParser.MINUS = 7;
interpreterParser.STAR = 8;
interpreterParser.QMARK = 9;
interpreterParser.COMMA = 10;
interpreterParser.LCURLY = 11;
interpreterParser.RCURLY = 12;
interpreterParser.TILDE = 13;
interpreterParser.DQUOTE = 14;
interpreterParser.TO = 15;
interpreterParser.AND = 16;
interpreterParser.OR = 17;
interpreterParser.NOT = 18;
interpreterParser.NEAR = 19;
interpreterParser.ONEAR = 20;
interpreterParser.KEYWORD_LIST = 21;
interpreterParser.WS = 22;
interpreterParser.NUMBER = 23;
interpreterParser.DATE_TOKEN = 24;
interpreterParser.TERM_NORMAL = 25;
interpreterParser.TERM_WILDCARD = 26;
interpreterParser.PHRASE = 27;
interpreterParser.PHRASE_ANYTHING = 28;
interpreterParser.OPERATOR = 29;
interpreterParser.ATOM = 30;
interpreterParser.MODIFIER = 31;
interpreterParser.TMODIFIER = 32;
interpreterParser.CLAUSE = 33;
interpreterParser.FIELD = 34;
interpreterParser.FUZZY = 35;
interpreterParser.BOOST = 36;
interpreterParser.QNORMAL = 37;
interpreterParser.QPHRASE = 38;
interpreterParser.QPHRASETRUNC = 39;
interpreterParser.QTRUNCATED = 40;
interpreterParser.QRANGEIN = 41;
interpreterParser.QRANGEEX = 42;
interpreterParser.QANYTHING = 43;
interpreterParser.QDATE = 44;

interpreterParser.RULE_mainQ = 0;
interpreterParser.RULE_clauseDefault = 1;
interpreterParser.RULE_clauseOr = 2;
interpreterParser.RULE_clauseAnd = 3;
interpreterParser.RULE_clauseNot = 4;
interpreterParser.RULE_clauseNear = 5;
interpreterParser.RULE_clauseONear = 6;
interpreterParser.RULE_clauseBasic = 7;
interpreterParser.RULE_atom = 8;
interpreterParser.RULE_field = 9;
interpreterParser.RULE_value = 10;
interpreterParser.RULE_anything = 11;
interpreterParser.RULE_two_sided_range_term = 12;
interpreterParser.RULE_range_term = 13;
interpreterParser.RULE_range_value = 14;
interpreterParser.RULE_multi_value = 15;
interpreterParser.RULE_keyword_list = 16;
interpreterParser.RULE_normal = 17;
interpreterParser.RULE_wildcard = 18;
interpreterParser.RULE_quoted_truncated = 19;
interpreterParser.RULE_quoted = 20;
interpreterParser.RULE_modifier = 21;
interpreterParser.RULE_term_modifier = 22;
interpreterParser.RULE_proximity = 23;
interpreterParser.RULE_not_ = 24;
interpreterParser.RULE_and_ = 25;
interpreterParser.RULE_or_ = 26;
interpreterParser.RULE_near_ = 27;
interpreterParser.RULE_onear_ = 28;
interpreterParser.RULE_date = 29;
interpreterParser.RULE_sep = 30;


function MainQContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_mainQ;
    this.clause = null; // ClauseDefaultContext
    return this;
}

MainQContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainQContext.prototype.constructor = MainQContext;

MainQContext.prototype.EOF = function() {
    return this.getToken(interpreterParser.EOF, 0);
};

MainQContext.prototype.clauseDefault = function() {
    return this.getTypedRuleContext(ClauseDefaultContext,0);
};

MainQContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};




interpreterParser.MainQContext = MainQContext;

interpreterParser.prototype.mainQ = function() {

    var localctx = new MainQContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, interpreterParser.RULE_mainQ);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 62;
            this.sep();

        }
        this.state = 65;
        localctx.clause = this.clauseDefault();
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 66;
            this.sep();
        }

        this.state = 69;
        this.match(interpreterParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseDefaultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseDefault;
    return this;
}

ClauseDefaultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseDefaultContext.prototype.constructor = ClauseDefaultContext;

ClauseDefaultContext.prototype.clauseOr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseOrContext);
    } else {
        return this.getTypedRuleContext(ClauseOrContext,i);
    }
};

ClauseDefaultContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};




interpreterParser.ClauseDefaultContext = ClauseDefaultContext;

interpreterParser.prototype.clauseDefault = function() {

    var localctx = new ClauseDefaultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, interpreterParser.RULE_clauseDefault);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.clauseOr();
        this.state = 78;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 73;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                if(la_===1) {
                    this.state = 72;
                    this.sep();

                }
                this.state = 75;
                this.clauseOr(); 
            }
            this.state = 80;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseOr;
    return this;
}

ClauseOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseOrContext.prototype.constructor = ClauseOrContext;

ClauseOrContext.prototype.clauseAnd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseAndContext);
    } else {
        return this.getTypedRuleContext(ClauseAndContext,i);
    }
};

ClauseOrContext.prototype.or_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Or_Context);
    } else {
        return this.getTypedRuleContext(Or_Context,i);
    }
};




interpreterParser.ClauseOrContext = ClauseOrContext;

interpreterParser.prototype.clauseOr = function() {

    var localctx = new ClauseOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, interpreterParser.RULE_clauseOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.clauseAnd();
        this.state = 87;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 82;
                this.or_();
                this.state = 83;
                this.clauseAnd(); 
            }
            this.state = 89;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseAnd;
    return this;
}

ClauseAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseAndContext.prototype.constructor = ClauseAndContext;

ClauseAndContext.prototype.clauseNot = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseNotContext);
    } else {
        return this.getTypedRuleContext(ClauseNotContext,i);
    }
};

ClauseAndContext.prototype.and_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_Context);
    } else {
        return this.getTypedRuleContext(And_Context,i);
    }
};




interpreterParser.ClauseAndContext = ClauseAndContext;

interpreterParser.prototype.clauseAnd = function() {

    var localctx = new ClauseAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, interpreterParser.RULE_clauseAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.clauseNot();
        this.state = 96;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 91;
                this.and_();
                this.state = 92;
                this.clauseNot(); 
            }
            this.state = 98;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseNotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseNot;
    return this;
}

ClauseNotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseNotContext.prototype.constructor = ClauseNotContext;

ClauseNotContext.prototype.clauseNear = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseNearContext);
    } else {
        return this.getTypedRuleContext(ClauseNearContext,i);
    }
};

ClauseNotContext.prototype.not_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Not_Context);
    } else {
        return this.getTypedRuleContext(Not_Context,i);
    }
};




interpreterParser.ClauseNotContext = ClauseNotContext;

interpreterParser.prototype.clauseNot = function() {

    var localctx = new ClauseNotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, interpreterParser.RULE_clauseNot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.clauseNear();
        this.state = 105;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 100;
                this.not_();
                this.state = 101;
                this.clauseNear(); 
            }
            this.state = 107;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseNearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseNear;
    return this;
}

ClauseNearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseNearContext.prototype.constructor = ClauseNearContext;

ClauseNearContext.prototype.clauseONear = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseONearContext);
    } else {
        return this.getTypedRuleContext(ClauseONearContext,i);
    }
};

ClauseNearContext.prototype.near_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Near_Context);
    } else {
        return this.getTypedRuleContext(Near_Context,i);
    }
};




interpreterParser.ClauseNearContext = ClauseNearContext;

interpreterParser.prototype.clauseNear = function() {

    var localctx = new ClauseNearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, interpreterParser.RULE_clauseNear);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.clauseONear();
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 109;
                this.near_();
                this.state = 110;
                this.clauseONear(); 
            }
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseONearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseONear;
    return this;
}

ClauseONearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseONearContext.prototype.constructor = ClauseONearContext;

ClauseONearContext.prototype.clauseBasic = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseBasicContext);
    } else {
        return this.getTypedRuleContext(ClauseBasicContext,i);
    }
};

ClauseONearContext.prototype.onear_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Onear_Context);
    } else {
        return this.getTypedRuleContext(Onear_Context,i);
    }
};




interpreterParser.ClauseONearContext = ClauseONearContext;

interpreterParser.prototype.clauseONear = function() {

    var localctx = new ClauseONearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, interpreterParser.RULE_clauseONear);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.clauseBasic();
        this.state = 123;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.onear_();
                this.state = 119;
                this.clauseBasic(); 
            }
            this.state = 125;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClauseBasicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_clauseBasic;
    return this;
}

ClauseBasicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseBasicContext.prototype.constructor = ClauseBasicContext;

ClauseBasicContext.prototype.LPAREN = function() {
    return this.getToken(interpreterParser.LPAREN, 0);
};

ClauseBasicContext.prototype.clauseDefault = function() {
    return this.getTypedRuleContext(ClauseDefaultContext,0);
};

ClauseBasicContext.prototype.RPAREN = function() {
    return this.getToken(interpreterParser.RPAREN, 0);
};

ClauseBasicContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

ClauseBasicContext.prototype.term_modifier = function() {
    return this.getTypedRuleContext(Term_modifierContext,0);
};

ClauseBasicContext.prototype.or_ = function() {
    return this.getTypedRuleContext(Or_Context,0);
};

ClauseBasicContext.prototype.and_ = function() {
    return this.getTypedRuleContext(And_Context,0);
};

ClauseBasicContext.prototype.not_ = function() {
    return this.getTypedRuleContext(Not_Context,0);
};

ClauseBasicContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};




interpreterParser.ClauseBasicContext = ClauseBasicContext;

interpreterParser.prototype.clauseBasic = function() {

    var localctx = new ClauseBasicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, interpreterParser.RULE_clauseBasic);
    var _la = 0; // Token type
    try {
        this.state = 152;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            if(la_===1) {
                this.state = 126;
                this.sep();

            }
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << interpreterParser.AND) | (1 << interpreterParser.OR) | (1 << interpreterParser.NOT) | (1 << interpreterParser.WS))) !== 0)) {
                this.state = 132;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 129;
                    this.or_();
                    break;

                case 2:
                    this.state = 130;
                    this.and_();
                    break;

                case 3:
                    this.state = 131;
                    this.not_();
                    break;

                }
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===interpreterParser.WS) {
                    this.state = 134;
                    this.sep();
                }

            }

            this.state = 139;
            this.match(interpreterParser.LPAREN);
            this.state = 140;
            this.clauseDefault();
            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 141;
                this.sep();
            }

            this.state = 144;
            this.match(interpreterParser.RPAREN);
            this.state = 146;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 145;
                this.term_modifier();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 148;
                this.sep();
            }

            this.state = 151;
            this.atom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

AtomContext.prototype.multi_value = function() {
    return this.getTypedRuleContext(Multi_valueContext,0);
};

AtomContext.prototype.term_modifier = function() {
    return this.getTypedRuleContext(Term_modifierContext,0);
};

AtomContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};




interpreterParser.AtomContext = AtomContext;

interpreterParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, interpreterParser.RULE_atom);
    try {
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this.field();
            this.state = 155;
            this.multi_value();
            this.state = 157;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 156;
                this.term_modifier();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 160;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 159;
                this.field();

            }
            this.state = 162;
            this.value();
            this.state = 164;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 163;
                this.term_modifier();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.TERM_NORMAL = function() {
    return this.getToken(interpreterParser.TERM_NORMAL, 0);
};

FieldContext.prototype.COLON = function() {
    return this.getToken(interpreterParser.COLON, 0);
};

FieldContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};




interpreterParser.FieldContext = FieldContext;

interpreterParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, interpreterParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(interpreterParser.TERM_NORMAL);
        this.state = 169;
        this.match(interpreterParser.COLON);
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 170;
            this.sep();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.range_term = function() {
    return this.getTypedRuleContext(Range_termContext,0);
};

ValueContext.prototype.keyword_list = function() {
    return this.getTypedRuleContext(Keyword_listContext,0);
};

ValueContext.prototype.normal = function() {
    return this.getTypedRuleContext(NormalContext,0);
};

ValueContext.prototype.wildcard = function() {
    return this.getTypedRuleContext(WildcardContext,0);
};

ValueContext.prototype.quoted = function() {
    return this.getTypedRuleContext(QuotedContext,0);
};

ValueContext.prototype.quoted_truncated = function() {
    return this.getTypedRuleContext(Quoted_truncatedContext,0);
};

ValueContext.prototype.QMARK = function() {
    return this.getToken(interpreterParser.QMARK, 0);
};

ValueContext.prototype.anything = function() {
    return this.getTypedRuleContext(AnythingContext,0);
};

ValueContext.prototype.STAR = function() {
    return this.getToken(interpreterParser.STAR, 0);
};




interpreterParser.ValueContext = ValueContext;

interpreterParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, interpreterParser.RULE_value);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.range_term();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 174;
            this.keyword_list();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 175;
            this.normal();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 176;
            this.wildcard();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 177;
            this.quoted();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 178;
            this.quoted_truncated();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 179;
            this.match(interpreterParser.QMARK);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 180;
            this.anything();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 181;
            this.match(interpreterParser.STAR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AnythingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_anything;
    return this;
}

AnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnythingContext.prototype.constructor = AnythingContext;

AnythingContext.prototype.STAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(interpreterParser.STAR);
    } else {
        return this.getToken(interpreterParser.STAR, i);
    }
};


AnythingContext.prototype.COLON = function() {
    return this.getToken(interpreterParser.COLON, 0);
};




interpreterParser.AnythingContext = AnythingContext;

interpreterParser.prototype.anything = function() {

    var localctx = new AnythingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, interpreterParser.RULE_anything);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(interpreterParser.STAR);
        this.state = 185;
        this.match(interpreterParser.COLON);
        this.state = 186;
        this.match(interpreterParser.STAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Two_sided_range_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_two_sided_range_term;
    this.start_type = null; // Token
    this.a = null; // Range_valueContext
    this.b = null; // Range_valueContext
    this.end_type = null; // Token
    return this;
}

Two_sided_range_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Two_sided_range_termContext.prototype.constructor = Two_sided_range_termContext;

Two_sided_range_termContext.prototype.LBRACK = function() {
    return this.getToken(interpreterParser.LBRACK, 0);
};

Two_sided_range_termContext.prototype.LCURLY = function() {
    return this.getToken(interpreterParser.LCURLY, 0);
};

Two_sided_range_termContext.prototype.RBRACK = function() {
    return this.getToken(interpreterParser.RBRACK, 0);
};

Two_sided_range_termContext.prototype.RCURLY = function() {
    return this.getToken(interpreterParser.RCURLY, 0);
};

Two_sided_range_termContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

Two_sided_range_termContext.prototype.range_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Range_valueContext);
    } else {
        return this.getTypedRuleContext(Range_valueContext,i);
    }
};

Two_sided_range_termContext.prototype.TO = function() {
    return this.getToken(interpreterParser.TO, 0);
};




interpreterParser.Two_sided_range_termContext = Two_sided_range_termContext;

interpreterParser.prototype.two_sided_range_term = function() {

    var localctx = new Two_sided_range_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, interpreterParser.RULE_two_sided_range_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        localctx.start_type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===interpreterParser.LBRACK || _la===interpreterParser.LCURLY)) {
            localctx.start_type = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 189;
            this.sep();
        }

        this.state = 192;
        localctx.a = this.range_value();
        this.state = 194;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        if(la_===1) {
            this.state = 193;
            this.sep();

        }
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << interpreterParser.STAR) | (1 << interpreterParser.TO) | (1 << interpreterParser.WS) | (1 << interpreterParser.NUMBER) | (1 << interpreterParser.DATE_TOKEN) | (1 << interpreterParser.TERM_NORMAL) | (1 << interpreterParser.TERM_WILDCARD) | (1 << interpreterParser.PHRASE) | (1 << interpreterParser.PHRASE_ANYTHING))) !== 0)) {
            this.state = 197;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.TO) {
                this.state = 196;
                this.match(interpreterParser.TO);
            }

            this.state = 200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 199;
                this.sep();
            }

            this.state = 202;
            localctx.b = this.range_value();
            this.state = 204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 203;
                this.sep();
            }

        }

        this.state = 208;
        localctx.end_type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===interpreterParser.RBRACK || _la===interpreterParser.RCURLY)) {
            localctx.end_type = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Range_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_range_term;
    return this;
}

Range_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_termContext.prototype.constructor = Range_termContext;

Range_termContext.prototype.two_sided_range_term = function() {
    return this.getTypedRuleContext(Two_sided_range_termContext,0);
};




interpreterParser.Range_termContext = Range_termContext;

interpreterParser.prototype.range_term = function() {

    var localctx = new Range_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, interpreterParser.RULE_range_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.two_sided_range_term();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Range_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_range_value;
    return this;
}

Range_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_valueContext.prototype.constructor = Range_valueContext;

Range_valueContext.prototype.wildcard = function() {
    return this.getTypedRuleContext(WildcardContext,0);
};

Range_valueContext.prototype.quoted = function() {
    return this.getTypedRuleContext(QuotedContext,0);
};

Range_valueContext.prototype.quoted_truncated = function() {
    return this.getTypedRuleContext(Quoted_truncatedContext,0);
};

Range_valueContext.prototype.date = function() {
    return this.getTypedRuleContext(DateContext,0);
};

Range_valueContext.prototype.normal = function() {
    return this.getTypedRuleContext(NormalContext,0);
};

Range_valueContext.prototype.STAR = function() {
    return this.getToken(interpreterParser.STAR, 0);
};




interpreterParser.Range_valueContext = Range_valueContext;

interpreterParser.prototype.range_value = function() {

    var localctx = new Range_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, interpreterParser.RULE_range_value);
    try {
        this.state = 218;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case interpreterParser.TERM_WILDCARD:
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.wildcard();
            break;
        case interpreterParser.PHRASE:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.quoted();
            break;
        case interpreterParser.PHRASE_ANYTHING:
            this.enterOuterAlt(localctx, 3);
            this.state = 214;
            this.quoted_truncated();
            break;
        case interpreterParser.DATE_TOKEN:
            this.enterOuterAlt(localctx, 4);
            this.state = 215;
            this.date();
            break;
        case interpreterParser.NUMBER:
        case interpreterParser.TERM_NORMAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 216;
            this.normal();
            break;
        case interpreterParser.STAR:
            this.enterOuterAlt(localctx, 6);
            this.state = 217;
            this.match(interpreterParser.STAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Multi_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_multi_value;
    return this;
}

Multi_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multi_valueContext.prototype.constructor = Multi_valueContext;

Multi_valueContext.prototype.LPAREN = function() {
    return this.getToken(interpreterParser.LPAREN, 0);
};

Multi_valueContext.prototype.RPAREN = function() {
    return this.getToken(interpreterParser.RPAREN, 0);
};

Multi_valueContext.prototype.clauseDefault = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseDefaultContext);
    } else {
        return this.getTypedRuleContext(ClauseDefaultContext,i);
    }
};

Multi_valueContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(interpreterParser.COMMA);
    } else {
        return this.getToken(interpreterParser.COMMA, i);
    }
};


Multi_valueContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};




interpreterParser.Multi_valueContext = Multi_valueContext;

interpreterParser.prototype.multi_value = function() {

    var localctx = new Multi_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, interpreterParser.RULE_multi_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(interpreterParser.LPAREN);
        this.state = 228; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 221;
            this.clauseDefault();
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.COMMA) {
                this.state = 222;
                this.match(interpreterParser.COMMA);
            }

            this.state = 226;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
            if(la_===1) {
                this.state = 225;
                this.sep();

            }
            this.state = 230; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << interpreterParser.LPAREN) | (1 << interpreterParser.LBRACK) | (1 << interpreterParser.STAR) | (1 << interpreterParser.QMARK) | (1 << interpreterParser.LCURLY) | (1 << interpreterParser.AND) | (1 << interpreterParser.OR) | (1 << interpreterParser.NOT) | (1 << interpreterParser.KEYWORD_LIST) | (1 << interpreterParser.WS) | (1 << interpreterParser.NUMBER) | (1 << interpreterParser.TERM_NORMAL) | (1 << interpreterParser.TERM_WILDCARD) | (1 << interpreterParser.PHRASE) | (1 << interpreterParser.PHRASE_ANYTHING))) !== 0));
        this.state = 232;
        this.match(interpreterParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Keyword_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_keyword_list;
    return this;
}

Keyword_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Keyword_listContext.prototype.constructor = Keyword_listContext;

Keyword_listContext.prototype.KEYWORD_LIST = function() {
    return this.getToken(interpreterParser.KEYWORD_LIST, 0);
};




interpreterParser.Keyword_listContext = Keyword_listContext;

interpreterParser.prototype.keyword_list = function() {

    var localctx = new Keyword_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, interpreterParser.RULE_keyword_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(interpreterParser.KEYWORD_LIST);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NormalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_normal;
    return this;
}

NormalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NormalContext.prototype.constructor = NormalContext;

NormalContext.prototype.TERM_NORMAL = function() {
    return this.getToken(interpreterParser.TERM_NORMAL, 0);
};

NormalContext.prototype.NUMBER = function() {
    return this.getToken(interpreterParser.NUMBER, 0);
};




interpreterParser.NormalContext = NormalContext;

interpreterParser.prototype.normal = function() {

    var localctx = new NormalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, interpreterParser.RULE_normal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        _la = this._input.LA(1);
        if(!(_la===interpreterParser.NUMBER || _la===interpreterParser.TERM_NORMAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WildcardContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_wildcard;
    return this;
}

WildcardContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WildcardContext.prototype.constructor = WildcardContext;

WildcardContext.prototype.TERM_WILDCARD = function() {
    return this.getToken(interpreterParser.TERM_WILDCARD, 0);
};




interpreterParser.WildcardContext = WildcardContext;

interpreterParser.prototype.wildcard = function() {

    var localctx = new WildcardContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, interpreterParser.RULE_wildcard);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(interpreterParser.TERM_WILDCARD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Quoted_truncatedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_quoted_truncated;
    return this;
}

Quoted_truncatedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Quoted_truncatedContext.prototype.constructor = Quoted_truncatedContext;

Quoted_truncatedContext.prototype.PHRASE_ANYTHING = function() {
    return this.getToken(interpreterParser.PHRASE_ANYTHING, 0);
};




interpreterParser.Quoted_truncatedContext = Quoted_truncatedContext;

interpreterParser.prototype.quoted_truncated = function() {

    var localctx = new Quoted_truncatedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, interpreterParser.RULE_quoted_truncated);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(interpreterParser.PHRASE_ANYTHING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuotedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_quoted;
    return this;
}

QuotedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedContext.prototype.constructor = QuotedContext;

QuotedContext.prototype.PHRASE = function() {
    return this.getToken(interpreterParser.PHRASE, 0);
};




interpreterParser.QuotedContext = QuotedContext;

interpreterParser.prototype.quoted = function() {

    var localctx = new QuotedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, interpreterParser.RULE_quoted);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(interpreterParser.PHRASE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_modifier;
    return this;
}

ModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierContext.prototype.constructor = ModifierContext;

ModifierContext.prototype.PLUS = function() {
    return this.getToken(interpreterParser.PLUS, 0);
};

ModifierContext.prototype.MINUS = function() {
    return this.getToken(interpreterParser.MINUS, 0);
};




interpreterParser.ModifierContext = ModifierContext;

interpreterParser.prototype.modifier = function() {

    var localctx = new ModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, interpreterParser.RULE_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        _la = this._input.LA(1);
        if(!(_la===interpreterParser.PLUS || _la===interpreterParser.MINUS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Term_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_term_modifier;
    return this;
}

Term_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Term_modifierContext.prototype.constructor = Term_modifierContext;

Term_modifierContext.prototype.proximity = function() {
    return this.getTypedRuleContext(ProximityContext,0);
};




interpreterParser.Term_modifierContext = Term_modifierContext;

interpreterParser.prototype.term_modifier = function() {

    var localctx = new Term_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, interpreterParser.RULE_term_modifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.proximity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProximityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_proximity;
    return this;
}

ProximityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProximityContext.prototype.constructor = ProximityContext;

ProximityContext.prototype.TILDE = function() {
    return this.getToken(interpreterParser.TILDE, 0);
};

ProximityContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};




interpreterParser.ProximityContext = ProximityContext;

interpreterParser.prototype.proximity = function() {

    var localctx = new ProximityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, interpreterParser.RULE_proximity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 248;
            this.sep();
        }

        this.state = 251;
        this.match(interpreterParser.TILDE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Not_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_not_;
    return this;
}

Not_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_Context.prototype.constructor = Not_Context;

Not_Context.prototype.AND = function() {
    return this.getToken(interpreterParser.AND, 0);
};

Not_Context.prototype.NOT = function() {
    return this.getToken(interpreterParser.NOT, 0);
};

Not_Context.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};




interpreterParser.Not_Context = Not_Context;

interpreterParser.prototype.not_ = function() {

    var localctx = new Not_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 48, interpreterParser.RULE_not_);
    var _la = 0; // Token type
    try {
        this.state = 265;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 254;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 253;
                this.sep();
            }

            this.state = 256;
            this.match(interpreterParser.AND);
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 257;
                this.sep();
            }

            this.state = 260;
            this.match(interpreterParser.NOT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===interpreterParser.WS) {
                this.state = 261;
                this.sep();
            }

            this.state = 264;
            this.match(interpreterParser.NOT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function And_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_and_;
    return this;
}

And_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_Context.prototype.constructor = And_Context;

And_Context.prototype.AND = function() {
    return this.getToken(interpreterParser.AND, 0);
};

And_Context.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};




interpreterParser.And_Context = And_Context;

interpreterParser.prototype.and_ = function() {

    var localctx = new And_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 50, interpreterParser.RULE_and_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 267;
            this.sep();
        }

        this.state = 270;
        this.match(interpreterParser.AND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Or_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_or_;
    return this;
}

Or_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Or_Context.prototype.constructor = Or_Context;

Or_Context.prototype.OR = function() {
    return this.getToken(interpreterParser.OR, 0);
};

Or_Context.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};




interpreterParser.Or_Context = Or_Context;

interpreterParser.prototype.or_ = function() {

    var localctx = new Or_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 52, interpreterParser.RULE_or_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 272;
            this.sep();
        }

        this.state = 275;
        this.match(interpreterParser.OR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Near_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_near_;
    return this;
}

Near_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Near_Context.prototype.constructor = Near_Context;

Near_Context.prototype.NEAR = function() {
    return this.getToken(interpreterParser.NEAR, 0);
};

Near_Context.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};




interpreterParser.Near_Context = Near_Context;

interpreterParser.prototype.near_ = function() {

    var localctx = new Near_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 54, interpreterParser.RULE_near_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 277;
            this.sep();
        }

        this.state = 280;
        this.match(interpreterParser.NEAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Onear_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_onear_;
    return this;
}

Onear_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Onear_Context.prototype.constructor = Onear_Context;

Onear_Context.prototype.ONEAR = function() {
    return this.getToken(interpreterParser.ONEAR, 0);
};

Onear_Context.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};




interpreterParser.Onear_Context = Onear_Context;

interpreterParser.prototype.onear_ = function() {

    var localctx = new Onear_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 56, interpreterParser.RULE_onear_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===interpreterParser.WS) {
            this.state = 282;
            this.sep();
        }

        this.state = 285;
        this.match(interpreterParser.ONEAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.DATE_TOKEN = function() {
    return this.getToken(interpreterParser.DATE_TOKEN, 0);
};




interpreterParser.DateContext = DateContext;

interpreterParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, interpreterParser.RULE_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(interpreterParser.DATE_TOKEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = interpreterParser.RULE_sep;
    return this;
}

SepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SepContext.prototype.constructor = SepContext;

SepContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(interpreterParser.WS);
    } else {
        return this.getToken(interpreterParser.WS, i);
    }
};





interpreterParser.SepContext = SepContext;

interpreterParser.prototype.sep = function() {

    var localctx = new SepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, interpreterParser.RULE_sep);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 289;
        		this.match(interpreterParser.WS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 292; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.interpreterParser = interpreterParser;
