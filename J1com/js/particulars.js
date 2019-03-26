$(function () {
    //
    //foot
    var xia = $('.yq-r ul li').outerHeight();
    // console.log(iw);
    //1.先将所有图放在下面
    $('.yq-r ul li').css('top', xia);

    //2.第一张先移到可视区;
    $('.yq-r ul li').eq(0).css('top', 0);

    //3.开启定时器
    var now4 = 0; //当前图片下标
    var timer4 = null;
    timer4 = setInterval(next4, 3000);//定时器

    function next4() {
        $('.yq-r ul li').eq(now4).stop().animate({ 'top': -xia }, 500);
        now4 = ++now4 > $('.yq-r ul li').length - 1 ? 0 : now4;//临界值判断
        $('.yq-r ul li').eq(now4).css('top', xia);
        $('.yq-r ul li').eq(now4).stop().animate({ 'top': 0 }, 500);
    }
    //4.移入移出停止定时器
    $('.yq-r').hover(function () {
        clearInterval(timer4);
    }, function () {
        timer4 = setInterval(next4, 3000);
    });

    //toback
    // var gun = window.scrollY;//获取滚轮数值
    $(window).scroll(function () {
        var zhi = $(window).scrollTop();
        // console.log(zhi);
        if (zhi >= 300) {
            // console.log(zhi);
            $('#toback').stop().animate({ 'height': '37px' }, 600);
            $('#toback').on('click', function () {
                window.scrollTo(0, 0);
            });
        } else if (zhi < 266) {
            //   console.log('asdf')
            $('#toback').stop().animate({ 'height': '0' }, 600);
            // console.log('1');
        }
    });
    //sideBar
    $('.sideBar li').eq(0).hover(function () {
        $(this).children(0).css('display', 'block');
    }, function () {
        $(this).children(0).css('display', 'none');
    })
    //
    $('.sideBar li').eq(1).hover(function () {
        $(this).children(0).css('display', 'block');
    }, function () {
        $(this).children(0).css('display', 'none');
    });






    //2. 接收列表页传来的cid
    var data = window.location.search;
    var er = data.substring(1);
    // console.log(er);
    $.ajax({
        type: "post",
        url: "../api/par.php",
        data: {
            'cid': er
        },
        success: function (str) {
            var arr = JSON.parse(str);
            // console.log(arr);
            var res = `<h2><i></i><span>${arr[0].con}</span></h2>
            <h3>（当日订单隔日发货/节假日均不发货）</h3>
            <div class="pri">
                <dl class="clearfix">
                    <dt class="fl">价 格：</dt>
                    <dd class="fl"><span>￥${arr[0].price}</span></dd>
                </dl>
                <p>
                    <span>手机下单更方便</span>
                    <i>(扫码下单)</i>
                </p>
            </div>
            <div class="adress">
                <p><span>商品规格:</span>IGJKG/35</p>
                <p><span>生产厂家:</span>${arr[0].man}</p>
                <p><span>支持:</span>在线支付满89元包邮</p>
            </div>
            <div class="shulian">
                <dl class="clearfix">
                    <dt class="fl">数量:</dt>
                    <dd class="fl clearfix">
                        <input type="text" value="1" id="lian">
                        <a href="###" id="add"></a>
                        <a href="###" id="minus"></a>
                        <a href="###" id="jiaru"></a>
                    </dd>

                </dl>
            </div>
            <div class="main-haop">
                <h2>商品评价:</h2>
                <img src="../img/list/pjia.png" alt="">
                <p>购物后<span>评价</span>,即可获得额外积分</p>
                <p>评价: <span> ${arr[0].discuss}人评论 </span>销量: <i>${arr[0].volume}件</i></p>
            </div>
            `;
            $('.main-right').html(res);
            //

            var res2 = `<div class="small-img">
                <img src="${arr[0].img}" alt="">
            </div>
                 `
            $('.magnifier-line ul li').eq(0).html(res2);
            //man  放大镜
            var magnifierConfig = {
                magnifier: "#magnifier1",//最外层的大容器
                width: 340,//承载容器宽
                height: 339,//承载容器高
                moveWidth: null,//如果设置了移动盒子的宽度，则不计算缩放比例
                zoom: 5//缩放比例
            };

            var _magnifier = magnifier(magnifierConfig);

            /*magnifier的内置函数调用*/
            /*
                //设置magnifier函数的index属性
                _magnifier.setIndex(1);
        
                //重新载入主图,根据magnifier函数的index属性
                _magnifier.eqImg();
            */



            //点击加减数量
            var sl1 = $('#lian').val();
            $('#add').on('click', function () {//点击加号
                sl1++;//加
                // console.log(sl1);
                $('#lian').val(sl1);
            });
            $('#minus').on('click', function () {//点击减号
                sl1--;//减
                // console.log(sl1);
                if (sl1 <= 1) {
                    sl1 = 1;
                }
                $('#lian').val(sl1);
            })
            //
            //点击加入购物车 查询商品有无，将数量加入购物车
            $('#jiaru').on('click', function () {
                var user = cookie.get('name');
                var lian = $(this).prev().prev().prev().val();
                // console.log(lian);
                if (na) {//判断有没登陆
                    // console.log('jai')
                    $.ajax({
                        type: "post",
                        url: '../api/cart-par.php',
                        data: {
                            'user': na,
                            'cid': er,
                            'lian': lian
                        },
                        success: function (str) {
                            // console.log(str);
                            if (confirm('进入结算？'))
                                setTimeout(function () {
                                    location.href = 'cart.html';
                                }, 1000);
                        }
                    });

                } else {
                    alert('请登陆');
                }

            })



        }
    });




    //接收登录页传来的数据
    var storages = window.localStorage;
    var na = storages.getItem('user');
    var psweasy = storages.getItem('pass');




    if (na) {
        // var yh = cookie.get('name');
        $('.top ul').find('li').eq(0).html('您好，' + na + '欢迎来到健一网网上药店！ <a class="tuic">退出<a/>');
    } else {
        $('.top ul').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ]');
    };
    //删除cookie
    $('.tuic').on('click', function () {
        // confirm('确认退出?');
        if (confirm('确认退出?')) {
            $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ] <i></i><i></i>');
            storages.clear();
        }
    });



    //登陆用户、
    $('#denlu').on('click', function () {
        console.log('444')
        var urlS = window.location.href;
        storages.setItem('url', urlS);
        // console.log(urlS);
        location.href = 'login.html?';
    });
      //点击注册跳到注册页
      $('#zhuc').on('click', function () {
        setTimeout(function () {
            location.href = 'reg.html';
        },800)
    })

})