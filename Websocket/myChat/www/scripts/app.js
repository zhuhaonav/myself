window.onload = function(){
    var mychart = new myChart();
    mychart.init();
}
var myChart = function(){
    this.socket = null;
};
myChart.prototype = {
    init:function () {
        var that = this;
        //建立到服务器的socket连接
        this.socket = io.connect();
        //监听socket的connect
        this.socket.on('connect', function() {
            //console.log('connected');//成功后回调；
            document.getElementById('info').textContent = 'get yourself a nickname :';
            document.getElementById('nickWrapper').style.display = 'block';
            document.getElementById('nicknameInput').focus();
        });
        //接收后端返回信息
        this.socket.on('system',function(nickName, userCount, type){
            var msg = nickName + (type == 'login' ? ' joined' : ' left');
            that._displayNewMsg('system ', msg, 'red');
            document.getElementById('status').textContent = userCount + (userCount > 1 ? ' users' : ' user') + ' online';
        })
        //登录成功
        this.socket.on('loginSuccess',function(){
            document.getElementById('loginWrapper').style.display = 'none';
        })
        //更新消息
        this.socket.on('newMsg',function(nickName, msg, color){
            that._displayNewMsg(nickName, msg, color);
        })
        this.socket.on('nickExisted', function() {
            document.getElementById('info').textContent = '!nickname is taken, choose another';
        });
        //登录
        document.getElementById('loginBtn').addEventListener('click', function() {
            var nickName = document.getElementById('nicknameInput').value;
            if (nickName.trim().length != 0) {
                that.socket.emit('login', nickName);
            } else {
                document.getElementById('nicknameInput').focus();
            };
        });
        //提交信息
        document.getElementById('sendBtn').addEventListener('click', function() {
            var messageInput = document.getElementById('messageInput'),
                msg = messageInput.value,
                color = document.getElementById('colorStyle').value;
            messageInput.value = '';
            messageInput.focus();
            if (msg.trim().length != 0) {
                that.socket.emit('postMsg', msg, color);
                that._displayNewMsg('me', msg, color);
                return;
            };
        });
        //表情弹出层
        that._initialEmoji();
        document.getElementById('emoji').addEventListener('click',function(event){
            var emojiwrapper = document.getElementById('emojiWrapper');
            emojiwrapper.style.display = 'block';
            event.stopPropagation();
        })
        document.body.addEventListener('click',function(event){
            var emojiWrapper = document.getElementById('emojiWrapper');
            if(event.target!=emojiWrapper){
                emojiWrapper.style.display = 'none';
            }
        })
        //选择表情
        document.getElementById('emojiWrapper').addEventListener('click',function (event) {
            if(event.target.nodeName.toLowerCase() == 'img'){
                var messageInput = document.getElementById('messageInput');
                messageInput.focus();
                messageInput.value = messageInput.value + '[emoji:' + event.target.title + ']';
            }
        })
        //清除记录
        document.getElementById('clearBtn').addEventListener('click', function() {
            document.getElementById('historyMsg').innerHTML = '';
        });
    },
    //更新dom
    //消息记录；
    _displayNewMsg:function (user, msg, color) {
        var container = document.getElementById('historyMsg'),
            msgToDisplay = document.createElement('p'),
            date = new Date().toTimeString().substr(0, 8);
            msg = this._showEmoji(msg);
        msgToDisplay.style.color = color || '#000';
        msgToDisplay.innerHTML = user + '<span class="timespan">(' + date + '): </span>' + msg;
        container.appendChild(msgToDisplay);
        container.scrollTop = container.scrollHeight;
    },
    //表情gif图添加
    _initialEmoji: function() {
        var emojiContainer = document.getElementById('emojiWrapper'),
            docFragment = document.createDocumentFragment();
        for (var i = 69; i > 0; i--) {
            var emojiItem = document.createElement('img');
            emojiItem.src = './img/emoji/' + i + '.gif';
            emojiItem.title = i;
            docFragment.appendChild(emojiItem);
        };
        emojiContainer.appendChild(docFragment);
    },
    //替换字符为图片
    _showEmoji: function(msg) {
        var match, result = msg,
            reg = /\[emoji:\d+\]/g,
            emojiIndex;
        while (match = reg.exec(msg)) {
            emojiIndex = match[0].slice(7, -1);
            result = result.replace(match[0], '<img class="emoji" src="./img/emoji/' + emojiIndex + '.gif" />');
        };
        return result;
    },
}
