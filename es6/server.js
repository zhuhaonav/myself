//创建 node 服务
// var express = require('express'),
//     app = express(),
//     server = require('http').createServer(app);
// var fetch = require('node-fetch');
//     //users = [];
// app.use('/',express.static(__dirname + '/'));
// server.listen(3001);
//
// function* gen() {
//     var url = 'https://api.github.com/users/github';
//     var result = yield fetch(url);
//     console.log(result.bio);
// }
// var g = gen();
// var result = g.next();
//
// result.value.then(function(data){
//     return data.json();
// }).then(function(data){
//     g.next(data);
// });
// var fs = require('fs');
//
// var readFile = function(fileName){
//     return new Promise(function (resolve,reject) {
//         fs.readFile(fileName,function(error,data){
//             if(error)reject(error);
//             resolve(data);
//         });
//     });
// };

// function* gen(x){
//     var file1 = yield x+1;
//     var file2 = yield x+2;
// }
// var g = gen(1);
// g.next();
// console.log(g.next());
class A {}

class B extends A {
    constructor() {
        //super();
    }
}