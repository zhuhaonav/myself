var http = require('http');
//炸了。。。。。
//用于请求的选项
var options = {
  host: 'localhost',
  port: '92',
  path: 'getJson'
}
// 处理响应的回调函数
var callback = function(res){
  // 不断更新数据
  var body = '';
  res.on('data', function(data) {
    body += data;
  });

  res.on('end', function() {
    // 数据接收完成
    console.log(body);
  });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();