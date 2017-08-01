//find,insert,update,remove
//import MongoClient from 'mongodb';
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob


var fs = require('fs');
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

//添加数据
let insertData = function(db, data, callback) {
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
};

/*MongoClient.connect(DB_CONN_STR, function(err, db) {
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});*/

//查询数据
var selectData = function(db, callback) {
    //连接到表
    var collection = db.collection('site');
    //查询数据
    //var whereStr = {"_id":'*'};//查询条件
    collection.find().toArray(function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
};

var updateData = function(db, callback) {
    //连接到表
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":'菜鸟教程'};
    var updateStr = {$set: { "url" : "https://www.runoob.cn" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     updateData(db, function(result) {
//         console.log('更新：',result);
//         db.close();
//     });
// });
var delData = function(db, callback) {
    //连接到表
    var collection = db.collection('site');
    //删除
    var whereStr = {"author":'ben'};
    collection.remove(whereStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}
/*MongoClient.connect(DB_CONN_STR, function (err, db) {
    delData(db,function (result) {
        console.log(result);
        db.close();
    })
})*/

//文件系统
// fs.stat('readme.txt',function (err, stats) {
//     console.log(stats)
// });

//服务创建函数
var server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Origin', 'null');
    if(req.url.indexOf('getJson')!=-1){
        MongoClient.connect(DB_CONN_STR, function(err, db) {
            selectData(db, function(result) {
                //请求处理
                res.end(JSON.stringify(result));
                db.close();
            });
        });
    }
    else if(req.url.indexOf('postForm')!=-1){
        var post = '';
        req.on('data',function (chunk) {
            post += chunk;
        })
        req.on('end',function () {
            post = querystring.parse(post);
            MongoClient.connect(DB_CONN_STR, function(err, db) {
                insertData(db, post, function(result) {
                    //console.log('提交:',result);
                    db.close();
                });
                selectData(db,function (result) {
                    res.end(JSON.stringify(result));
                })
            });
        })
    }
    else if(req.url.indexOf('gettime')!=-1){
        //var reqUrl = 'http://www.gongjuji.net';
        var reqUrl = 'http://zh32320:8080/memberactivityapi/api/fridayprize/gettime';
        http.get(reqUrl,function(req){
            var html='';
            req.on('data',function(data){
                html+=data;
            });
            req.on('end',function(){
                res.end(html)
            });
        },'utf-8');
    }
});
//
var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");
server.listen(92);

//客户端交互
