//正则表达式验证
// var regex = new RegExp('xyz','i');
// //等价于
// var regex = /xyz/i;
//new RegExp(/abc/ig, 'i').flags
// "i"

//es6数值类型
// isFinite(25) // true
// isFinite("25") // true
// Number.isFinite(25) // true
// Number.isFinite("25") // false

//ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
// isNaN(NaN) // true
// isNaN("NaN") // true
// Number.isNaN(NaN) // true
// Number.isNaN("NaN") // false

//是否为整数
// Number.isInteger(25) // true
// Number.isInteger(25.0) // true
// Number.isInteger(25.1) // false
// Number.isInteger("15") // false
// Number.isInteger(true) // false

//除去一个数的小数部分。
// Math.trunc(4.1) // 4
// Math.trunc(4.9) // 4
// Math.trunc(-4.1) // -4
// Math.trunc(-4.9) // -4
// Math.trunc(-0.1234) // -0

//参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
// Math.sign(-5) // -1
// Math.sign(5) // +1
// Math.sign(0) // +0
// Math.sign(-0) // -0
// Math.sign(NaN) // NaN
// Math.sign('foo'); // NaN
// Math.sign();      // NaN

//ES6新增了6个三角函数方法。
//Math.sinh(x) //返回x的双曲正弦（hyperbolic sine）
//Math.cosh(x) //返回x的双曲余弦（hyperbolic cosine）
//Math.tanh(x) //返回x的双曲正切（hyperbolic tangent）
//Math.asinh(x) //返回x的反双曲正弦（inverse hyperbolic sine）
//Math.acosh(x) //返回x的反双曲余弦（inverse hyperbolic cosine）
//Math.atanh(x) //返回x的反双曲正切（inverse hyperbolic tangent）

//数组的拓展
// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// // ES5的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// // ES6的写法
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
// console.log(arr1,arr2);
//console.log(Array.from({length:3}));
//第二个参数，返回处理之后的值
// let arrayLike = [1,2,3];
// console.log(Array.from(arrayLike,x => x*x));
// console.log(Array.from(arrayLike.map(x => x*x)));

//Array.of方法用于将一组值，转换为数组。这个方法的主要目的，
// 是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
//Array.of(3,11,8)//[3,11,8]
// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]

//copyWithin 替换数组某某部分

//find();findIndex()函数;
//[1, 4, -5, 10].find((n) => n < 0);
// let a = [1, 5, 10, 15].findIndex((value, index, arr) => value > 9) // 2
// console.log(a);
//[NaN].findIndex(y => Object.is(NaN,y));

//判断数组中是否包含某个值
// [1, 2, 3].includes(2);     // true
// [1, 2, 3].includes(4);     // false
// [1, 2, NaN].includes(NaN); // true

//该方法的第二个参数表示搜索的起始位置，默认为0。
// 如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度
// 比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true

//Map结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
//Set结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。

//函数的赋值
// function foo({x, y = 5}) {
//     console.log(x, y);
// }
//
// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined

// 写法一
// function m1({x = 0, y = 0} = {}) {
//     return [x, y];
// }
// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//     return [x, y];
// }
//
// // 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]
//
// // x和y都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]
//
// // x有值，y无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]
//
// // x和y都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]
//
// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]

//前面的参数不能省略
// 例一
// function f(x = 1, y) {
//     return [x, y];
// }
//
/*
f() // [1, undefined]
f(2) // [2, undefined])
f(, 1) // 报错
f(undefined, 1) // [1, 1]

// 例二
function f(x, y = 5, z) {
    return [x, y, z];
}

f() // [undefined, 5, undefined]
f(1) // [1, 5, undefined]
f(1, ,2) // 报错
f(1, undefined, 2) // [1, 5, 2]*/

//rest参数
// function add(...values) {
//     let sum = 0;
//     console.log(values);
//     for (var val of values) {
//         sum += val;
//     }
//     console.log(sum);
//     return sum;
// }
//
// add(2, 5, 3) // 10

//拓展运算符，将数组转换成对应参数
/*
function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

var numbers = [4, 38];
add(...numbers) // 42*/

//es5写法
//console.log(Math.max.apply(null,[14,3,77]));
// ES6的写法
//Math.max(...[14, 3, 77])

//合并数组
// ES5
//[1, 2].concat(more);
// ES6
//[1, 2, ...more];

// var arr1 = ['a', 'b'];
// var arr2 = ['c'];
// var arr3 = ['d', 'e'];

// ES5的合并数组
//arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组 拓展运算符可用于对象与数组的转变；
//[...arr1, ...arr2, ...arr3];
// [ 'a', 'b', 'c', 'd', 'e' ];

// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]
//
// const [first, ...rest] = [];
// first // undefined
// rest  // []:
//
// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

//循环对象
// let map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
// ]);
//
// let arr = [...map.keys()]; // [1, 2, 3]
// console.log(arr);

//循环异步控制函数
//var go = function*(){
//    yield 1;
//    yield 2;
//    yield 3;
//};
//console.log(...go()) // [1, 2, 3]

//.name返回函数名
//？？？？
// function foo() {};
// foo.bind({}).name; // "bound foo"
//
// (function(){}).bind({}).name; // "bound "

//rest参数与箭头函数
// const numbers = (...nums) => nums;
//
// numbers(1, 2, 3, 4, 5);
// // [1,2,3,4,5]
//
// const headAndTail = (head, ...tail) => [head, tail];
//
// headAndTail(1, 2, 3, 4, 5);
// [1,[2,3,4,5]]

//（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
//
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
//
// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

//尾调用优化、
// function g() {
//     console.log(this.a);
// }
// function f(){
//     let m = 1;
//     let n = 2;
//     return g.call({a:m + n});
// }
// f();
// //尾递归
// function factorial(n, total) {
//     if(n===1) return total;
//     return factorial(n-1,n*total);
// }
// console.log(factorial(5,1));

// function Fibonacci (n) {
//     if ( n <= 1 ) {return 1};
//
//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// }
// console.log(Fibonacci(10)); // 89
//console.log(Fibonacci(100));
// Fibonacci(500)
// 堆栈溢出了

// function Fibonacci2 (n , ac1 = 1 , ac2 = 1){
//     if(n<=1){return ac2};
//     return Fibonacci2(n-1,ac2,ac1+ac2);
// }
// console.log(Fibonacci2(100));
// console.log(Fibonacci2(1000));
//
// function factorial(n, total = 1) {
//     if (n === 1) return total;
//     return factorial(n - 1, n * total);
// }
//
// factorial(5) // 120

//蹦床函数是什么鬼？？？？