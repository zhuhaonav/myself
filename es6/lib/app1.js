//对象的解构赋值
// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(first, second, third, fourth, fifth, sixth)
// var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// console.log(f); // 'hello'模式不会被赋值。
// console.log(l); // 'world'真正被赋值的是后者/变量，而不是前者/模式。

// let obj = {};
// let arr = [];
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
// console.log(obj,arr);
// let foo = {};
// ({baz: foo.bar} = {baz: 'baz'});
// console.log(foo);

// let foo;
// ({foo} = {foo: 1}); // 成功
// console.log(foo)

//let {log,sin,cos} = Math;

//字符串的解构赋值，同数组赋值，还可以对属性赋值；
// let {length : len} = 'hello';
// len // 5

//函数参数的解构赋值
// function add([x,y]){
// 	return x+y;
// }
// console.log(add([1,2]));

//[[1,2],[3,4]].map(([a,b]) => a + b);

//函数参数解构及默认
// function move({x,y} = {x: 0, y: 0}) {
// 	return [x, y];
// }
// console.log(move({x: 3,y: 8}));
// move({x: 3});

// 遍历Map结构，获取对象key和value；
// var map = new Map();
// map.set('first','hello');
// map.set('second','world');
// for (let [key,value] of map) {
// 	console.log(key + " is " + value);
// }

//es6模板字符串
// let basket = {
// 	count:2,
// 	onSale:4
// }
// document.querySelector('#result').innerHTML=`
// There are <b>${basket.count}</b> items
//    in your basket, <em>${basket.onSale}</em>
//   are on sale!
// `.trim();

//模板字符串中还能调用函数
// function fn() {
//   return "Hello World";
// }

// document.querySelector('#result').innerHTML=`foo ${fn()} bar`;

//模板字符串嵌套
// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];
// const tmpl = addrs =>`
// 	<table>
// 	${addrs.map(addr => `
// 		<tr><td>${addr.first}</td></tr>
// 		<tr><td>${addr.last}</td></tr>
// 	`).join('')}
// 	</table>
// `;
// document.querySelector('#result').innerHTML=tmpl(addrs);

//如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
// 写法一
// let str = 'return ' + '`Hello ${name}!`';
// let func = new Function('name', str);
// func('Jack') // "Hello Jack!"

// 写法二
// let str = '(name) => `Hello ${name}!`';
// let func = eval.call(null, str);
// func('Jack') // "Hello Jack!"

//es6标签模板，es6模板编译，？？？？？？
// let a = 5;
// let b = 10;
//
// function tag(s, v1) {
//   console.log(s)
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);
//   //return "OK";
// }
// tag`Hello ${ a + b } world ${ a * b}`;

// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
// function passthru(literals) {
// 	let result = '';
// 	let i=0;
// 	console.log(arguments,literals);//数组包含此对象；
// 	while (i < literals.length) {
// 		result += literals[i++];
// 		if(i < arguments.length) {
// 			result += arguments[i];
// 		};
// 	}
// 	return result;
// }
// console.log(msg);

//阻止用户恶意输入内容
//let sender = '<script>alert("abc")</script>';
//let message = SaferHTML`<p>${sender} has sent you a message.</p>`;
//function SaferHTML(templateData){
//var s = templateData[0];
//console.log(arguments);
//for (var i=1;i<arguments.length; i++){
//var arg = String(arguments[i]);

//s += arg.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
// s += templateData[i];
// }
// return s;
//}
// console.log(message);

//获取转义之前的原始字符
// tag`First line\nSecond line`;
// function tag(strings){
// 	console.log(strings.raw[0]);//raw()转码之前的数组；
// }
"use strict";