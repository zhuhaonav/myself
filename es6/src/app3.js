//es6对象的拓展
//对象简写
// function f(x, y){
//     return {x, y};
// }
// console.log(f(1,2));// Object {x: 1, y: 2}

//方法简写
// var o = {
//     method() {
//         return "Hello!";
//     }
// };
// var birth = '2000/01/01';
//
// var Person = {
//
//     name: '张三',
//
//     //等同于birth: birth
//     birth,
//
//     // 等同于hello: function ()...
//     hello() { console.log('我的名字是', this.name); }
//
// };
//CommonJS模块输出变量，就非常合适使用简洁写法。

// var ms = {};
// function getItem (key) {
//     return key in ms ? ms[key] : null;
// }
// function setItem (key, value) {
//     ms[key] = value;
// }
// function clear () {
//     ms = {};
// }
// module.exports = { getItem, setItem, clear };

//如果某个方法的值是一个Generator函数，前面需要加上星号。
// var obj = {
//     * m(){
//         yield 'hello world';
//     }
// };

//es6
// let propKey = 'foo';
// let obj = {
//     [propKey]: true,
//     ['a' + 'bc']: 123
// };

// const key1 = Symbol('description');
// const key2 = Symbol();
// let obj = {
//     [key1]() {},
//     [key2]() {},
// };
// obj[key1].name // "[description]"
// obj[key2].name // ""

//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
//如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
// var target = { a: 1 };
//
// var source1 = { b: 2 };
// var source2 = { c: 3 };
//
// Object.assign(target, source1, source2);
// target // {a:1, b:2, c:3}
//undefined,null 不在首参，就不会报错
//let obj = {a: 1};
//Object.assign(obj, undefined) === obj // true
//Object.assign(obj, null) === obj // true

//其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;
// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }
//只有字符串才具有枚举属性；

//对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
// var target = { a: { b: 'c', d: 'e' } }
// var source = { a: { b: 'hello' } }
// Object.assign(target, source)
// { a: { b: 'hello' } }

//属性的遍历
// （1）for...in
//
// for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。
//
// （2）Object.keys(obj)
//
// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
//
// （3）Object.getOwnPropertyNames(obj)
//
// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
//
// （4）Object.getOwnPropertySymbols(obj)
//
// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。
//
// （5）Reflect.ownKeys(obj)
//
// Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
//首先遍历所有属性名为数值的属性，按照数字排序。
// 其次遍历所有属性名为字符串的属性，按照生成时间排序。
// 最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
//Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]

//null传导符
// let message = 'a'
// const firstName = message ?. body ?. user ?. firstName || 'default';

//Symbol
//let a = Symbol('hello');

// const s = new Set();
//
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
// console.log(s)
// for (let i of s) {
//     console.log(i);
// }

//let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
//修改某些默认的行为，可理解为拦截；Reflect/Proxy;
// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//         console.log(`getting ${key}!`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//         console.log(`setting ${key}!`);
//         return Reflect.set(target, key, value, receiver);
//     }
// });
