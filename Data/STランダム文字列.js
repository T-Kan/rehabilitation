﻿// 暗記の用語

// 注意：
//  用語 を追加する場合、"" で囲み、行の終わりに , を付けてください。(ただし、最後の用語では , は不要！)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ひらがな
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var HIRA_USUAL = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんっ';

//濁音
var HIRA_DAKU = 'がきくげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ';

// 拗音
var HIRA_xArray = new Array(    "きゃ" , "きゅ", "きょ"
				, "しゃ" , "しゅ", "しょ"
				, "ちゃ" , "ちゅ", "ちょ"
				, "にゃ" , "にゅ", "にょ"
				, "ひゃ" , "ひゅ", "ひょ"
				, "みゃ" , "みゅ", "みょ"
				, "りゃ" , "りゅ", "りょ"
			//	, "てぃ" 	
		);

// 拗音(濁音)
var HIRA_DAKUxArray = new Array( "ぎゃ" , "ぎゅ", "ぎょ"
				, "じゃ" , "じゅ", "じょ"
				, "ぢゃ" , "ぢゅ", "ぢょ"
				, "びゃ" , "びゅ", "びょ"
				, "ぴゃ", "ぴゅ", "ぴょ"
			//	, "でぃ"			
		);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// カタカナ
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var KATA_USUAL = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンッ';

//濁音
var KATA_DAKU =  'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ';

// 拗音
var KATA_xArray = new Array(    "キャ" , "キュ", "キョ"
				, "シャ" , "シュ", "ショ"
				, "チャ" , "チュ", "チョ"
				, "ニャ" , "ニュ", "ニョ"
				, "ヒャ" , "ヒュ", "ヒョ"
				, "ミャ" , "ミュ", "ミョ"
				, "リャ" , "リュ", "リョ"
			//	, "ティ" 	
		);

// 拗音(濁音)
var KATA_DAKUxArray = new Array( "ギャ" , "ギュ", "ギョ"
				, "ジャ" , "ジュ", "ジョ"
				, "ヂャ" , "ヂュ", "ヂョ"
				, "ビャ" , "ビュ", "ビョ"
				, "ピャ", "ピュ", "ピョ"
			//	, "ディ"			
		);
