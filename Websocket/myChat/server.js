//创建 node 服务
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),//监听当前服务
    users = [];
app.use('/',express.static(__dirname + '/www'));
server.listen(3001);
console.log("server is running port 3001");

//IO socket
io.sockets.on('connection',function(socket){
    socket.on('login',function (nickname) {//用户加入聊天
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted');
        } else {
            //socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system', nickname, users.length, 'login');//向连接到当前服务的客户端发送当前用户昵称
        };
    });
    socket.on('disconnect', function() {//用户退出聊天
        if (socket.nickname != null) {
            users.splice(users.indexOf(socket.nickname), 1);
            socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
        }
    });
    socket.on('postMsg',function (msg,color){
        socket.broadcast.emit('newMsg', socket.nickname, msg, color);
    });
    // app.get('',function (res) {
    //
    // })
})