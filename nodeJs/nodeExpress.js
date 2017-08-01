var express = require('express'),
    path = require('path'),
    app = express(),
    fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

/*****************************文件读取*************************/
// 异步读取
/*fs.readFile('readme.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('readme.txt');
console.log("同步读取: " + data.toString());
console.log("程序执行完毕。");*/

/*读取文件信息*/
/*fs.stat('readme.txt', function (err, stats) {
    console.log("读取文件信息:",stats);
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
})*/
/*fs.writeFile('readme.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error(err);
    }
    fs.readFile('readme.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});*/
/*打开文件*/
var buf = new Buffer(1024);
/*fs.open('input.txt', 'r+', function(err,fd) {
    if (err) {
        return console.error(err);
    }
    else{
        /!*console.log("文件打开成功！");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }
            console.log(bytes + "  字节被读取");

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
        });*!/
        // 截取文件
        /!*fs.ftruncate(fd, 8, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件截取成功。");
            console.log("读取相同的文件");
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }
                // 仅输出读取的字节
                if(bytes > 0){
                    //console.log(buf.slice(0, bytes).toString());
                }
                // 关闭文件
                fs.close(fd, function(err){
                    if (err){
                        console.log(err);
                    }
                });
            });
        });*!/
        //删除文件
        /!*fs.unlink('input.txt', function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("文件删除成功！");
        });*!/
    }
});*/


// 创建可读流
var readerStream = fs.createReadStream('readme.txt');
var data = '';
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
/*readerStream.on('data', function(chunk) {
    //console.log('chunk',chunk)
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});*/

/*新建文件目录*/
/*fs.mkdir("./tmp/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});*/
fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    console.log( files );
});
// //删除文件目录
// fs.rmdir("./tmp/",function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('删除成功')
// });

//复制文件
function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
    //fs.writeFileSync(dst, fs.readFileSync(src));
}

/*function main(arr) {
    copy(arr[0], arr[1]);
}

main(['readme.txt','readme2.txt']);*/

//接收上传文件
app.post('/file_upload', function (req, res) {

    console.log(req.files);  // 上传的文件信息

    var des_file = __dirname + "/tmp/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

// 转换为绝对路径
//console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
//console.log('ext name : ' + path.extname('main.js'));

// express
app.get('/', function (req, res) {
    res.send('Hello World');
})

console.log('server is running');
app.listen(92);