// var it = makeIterator(['a', 'b']);
//
// console.log(it.next()); // { value: "a", done: false }
// console.log(it.next()); // { value: "b", done: false }
// console.log(it.next()); // { value: undefined, done: true }
//
// function makeIterator(array) {
//     var nextIndex = 0;
//     return {
//         next: function() {
//             return nextIndex < array.length ?
//             {value: array[nextIndex++], done: false} :
//             {value: undefined, done: true};
//         }
//     };
// }
//Iterator和for...of循环????
//for...in循环读取键名，for...of循环读取键值。
//Generator
//yield语句如果用在一个表达式之中，必须放在圆括号里面。
// function* demo() {
//     console.log('Hello' + yield); // SyntaxError
//     console.log('Hello' + yield 123); // SyntaxError
//
//     console.log('Hello' + (yield)); // OK
//     console.log('Hello' + (yield 123)); // OK
// }
function* gen(x){
    try {
        var y = yield x + 2;
    } catch (e){
        console.log(e);
    }
    return y;
}

var g = gen(1);
g.next();
g.throw(e);

// function* gen(x){
//     var y = yield x + 2;
//     return y;
// }
//
// var g = gen(1);
// g.next() // { value: 3, done: false }
// g.next(2) // { value: 2, done: true }