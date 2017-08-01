(function () {
    var isTc = _tc_bridge_public.isTc;
    var imgs = [['//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_03.jpg','//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_06.jpg',"//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_09.jpg",'//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_12.jpg','//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_16.jpg'],['//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_18.jpg','//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_21.jpg','//img1.40017.cn/touch/pushcode/ahuhao/zhouyi/77_23.jpg']]
    if(isTc){
        setTimeout(function () {
            window._tc_bridge_bar.set_navbar({
                param: {
                    left: [{tagname: "tag_click_back"}],
                    //center: [{tagname: "title", value: ""}],
                    right: [{tagname: "tag_click_share", value: "分享", icon: 'i_share'}]
                },
                callback: function (data) {
                    if(data.tagname == "tag_click_back"){
                        window._tc_bridge_util.set_webview_back();
                    }
                    if(data.tagname == "tag_click_share"){
                        setEvent('btn_share');
                        _tc_bridge_bar.shareInfoFromH5({
                            param: {
                                "tcsharetxt": "“樱”你而来，浪漫日韩游",
                                "tcsharedesc": "“樱”你而来，浪漫日韩游",
                                "tcshareurl": "https://m.17u.cn/client/General/AppAdverInfo/3471",
                                "tcshareimg": "http://img1.40017.cn/touch/pushcode/ahuhao/zhouyi/88_01-min.jpg",
                            },
                        })
                    }
                }
            });
        }, 0);
    };
    var html = '';
    for (var i=0; i<imgs[0].length; i++){
        html += '<li><img src="'+imgs[0][i]+'"/></li>'
    }
    $('.tab_con').html(html);
    $('.tab_head li').on('click',function(){
        var html = '';
        $('.tab_head li').removeClass('active');
        $(this).addClass('active');
        for (var i=0; i<imgs[$(this).index()].length; i++){
            html += '<li><img src="'+imgs[$(this).index()][i]+'"/></li>'
        }
        $('.tab_con').html(html);
    })
    $('.btn').on('click',function(){
        setEvent("seach_plane");
        if(isTc){
            location.href = 'http://shouji.17u.cn/internal/flight/home';
        }
        else{
            location.href = '//m.17u.cn/client/pj/102337348/flight|home';
        }
    })
    function setEvent(type) {
        //点击事件统计
            if(isTc){
                var params = {
                    "param": {
                        "category": "8",
                        "action": "5",
                        "optLabel": "a_0224kama",
                        "optValue":type,
                        "pagename":"kamaJapan"
                    },
                    "CBPluginName" : "CbObject",//回调，自定义
                    "CBTagName" : "CbFunction"//回调,自定义
                }
                _tc_bridge_util.set_category_event(params);
                //点击事件追踪
            }
            else{
                _tcTraObj._tcTrackEvent("kamaJapan", "click", "a_0224kama", type);
            }
        }

})()