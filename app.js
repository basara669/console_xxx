//初級編
//基本のconsole達
// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");
// console.info("Hello World");
// console.debug("Hello World");
//
//
// //中級編
// //console内は別の値にすることが出来る
// console.log("Hello", "world");
//
// //console内string以外も全然通る
// console.log("Hello", "world", 123, {foo:"bar"});
//
// //ネストも出来る
// console.log({foo:"bar", nested:{nestedFoo:"nestedBar"}});
//
// //%sは文字列を渡せる
// console.log("僕の名前は%s です", "basara669");
//
// //%dは数字を渡せる
// console.log("僕の名前は%sです。年齢は%dです", "basara669", 34);
//
// //%oはオブジェクトを渡せる
// console.log("僕の名前は%sです。年齢は%dです。%o", "basara669", 34, {foo:"bar"});
//
// //%cはCSSが渡せる
// console.log("ちゃんと聞いているのか、%cおかもとぉぉ！！", "color:red; font-size:35px;");
//
// //console.logを見やすくする
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   console.log("ランダムに数字を判定");
//   console.log("10以上？", num > 10);
//   console.log("50以上？", num > 50);
// }
//
// //インデントを加えてあげる
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   console.log("ランダムに数字を判定");
//   console.log("\t10以上？", num > 10);
//   console.log("\t50以上？", num > 50);
// }
//
//
// //グループ化する
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   console.group();
//   console.log("ランダムに数字を判定");
//   console.log("\t10以上？", num > 10);
//   console.log("\t50以上？", num > 50);
//   console.groupEnd();
// }
//
//
// //閉じる
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   console.groupCollapsed("ランダムに数字を判定");
//   console.log("\t10以上？", num > 10);
//   console.log("\t50以上？", num > 50);
//   console.groupEnd();
// }
//
// //ネストも出来る
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   console.groupCollapsed("ランダムに数字を判定");
//   console.log("\t10以上？", num > 10);
//   console.log("\t50以上？", num > 50);
//   console.groupCollapsed("何件目？");
//   console.log(i);
//   console.groupEnd();
//   console.groupEnd();
// }
//
// //console内で判定
// var foo = undefined;
// //普通JSで書くと
// if(!foo) {
//   console.error("初期化できてないよ！");
// }
//
// //でも、こうも書ける
// console.assert(foo,"初期化できてないよ！");

//ただ、これはあまり信用しちゃだめ
//判定している風だけどJS的には何も処理してくれてない
// console.assert(foo,"初期化できてないよ！")
// console.log(foo.toUpperCase());


//数える_通常版
// var numGraterThan50 = 0;
// var numLessThan50 = 0;
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   if(num > 50) {
//     console.log("50より上", ++numGraterThan50);
//   } else {
//     console.log("50より下", ++numLessThan50);
//   }
// }


//console.count
// for(var i = 0; i < 100; i++){
//   var num = Math.random() * 100;
//   if(num > 50) {
//     console.count("50より上", ++numGraterThan50);
//   } else {
//     console.count("50より下", ++numLessThan50);
//   }
// }


//実はパフォーマンスも計測が出来る
// console.time("create dummy array");
//
// var array = [];
// for(var i = 0; i < 10000000; i++){
//   array.push({index:i});
// }
//
// console.timeEnd("create dummy array");


//美しく連想配列を表示する_普通
function Character(name, skill) {
  this.name   = name;
  this.skill  = skill;
}

var kazshiba = new Character("kazshiba", "react");
var kymorimo = new Character("kymorimo", "b-monster");
var kazuokam = new Character("kazuokam", "けん玉");
var moda     = new Character("moda", "東京弁");

var chars = [kazshiba, kymorimo, kazuokam, moda];

console.log(chars);


//素敵に表示

console.table(chars);

var charsByName = {
  kazshiba : kazshiba,
  kazuokam : kazuokam,
  kymorimo : kymorimo,
  moda     : moda
}

console.table(charsByName);


console.table(charsByName, ["skill"]);
