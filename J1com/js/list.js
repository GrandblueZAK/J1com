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
    })

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
    })



    var gn = 'd1';


    var page = 1;
    var tiao = 12;
    function run(data) {
        // console.log(arr1);
        var res = data.map(function (item) {
            return `  <div data-id="${item.id}">
            <img src="${item.img}" alt="">
            <p>${item.con}</p>
            <h2>￥<span>${item.price}.00</span></h2>
            <h3>总销量：<span>${item.volume}</span> <span><i>${item.discuss}</i>条评论</span></h3>
            <h4>
                <a href="##" class="join">加入购物车<i></i></a>
                <a href="###">查看详情</a>
            </h4>
        </div>`
        }).join('');
        return res;
    }
    $.ajax({
        type: "post",
        url: "../api/list.php",
        data: {
            'page': page,
            'nums': tiao,
            'gn': gn
        },
        success: function (str) {
            var datalist = JSON.parse(str);
            // console.log(datalist);
            var arr1 = datalist.data;

            // run(str);
            $('.listbox').html(run(datalist.data));
            // console.log(res);
            var pages = Math.ceil(datalist.total / datalist.num);//总页码
            // console.log(pages);
            var xiab = ''; //生成下标
            for (var i = 0; i < pages; i++) {
                xiab += ` <a href="###">${i + 1}</a>`;
            }
            $('.pag-a').html(xiab);
            $('.pag-a a').eq(0).addClass('act');
            $('.pag-right i').eq(0).html('共' + pages + '页')
        }
    });

    //分页，点击切换页面
    $('.pag-a').on('click', 'a', function () {
        // console.log($(this).text());
        $(this).addClass('act').siblings().removeClass('act');
        var ipage = $(this).text();
        var tiao = 12;
        $.ajax({
            type: "post",
            url: "../api/list.php",
            data: {
                'page': ipage,
                'nums': tiao,
                'gn': gn
            },
            success: function (str) {
                var datalist = JSON.parse(str);
                // console.log(datalist);
                var arr1 = datalist.data;
                // run(str);
                setTimeout(function () {
                    $('.listbox').html(run(datalist.data));
                }, 500)
            }
        });
    });

    //
    //paixu排序
    //1.判断点击哪个，改变接口来更改功能
    // $('.zuo ul .paixu').attr('id');
    // console.log($('.zuo ul .paixu').attr('id'))
    //
    $('.zuo ul li').on('click', function () {
        $(this).addClass('paixu').siblings().removeClass('paixu');
        gn = $('.zuo ul .paixu').attr('id');
        //
        $.ajax({
            type: "post",
            url: "../api/list.php",
            data: {
                'page': page,
                'nums': tiao,
                'gn': gn
            },
            success: function (str) {
                var datalist = JSON.parse(str);
                $('.listbox').html(run(datalist.data));
                $('.pag-a a').eq(0).addClass('act').siblings().removeClass('act');
            }
        });
    });




    // //传id到详情页
    $('.listbox').on('click', 'img', function () {
        // console.log('1');
        var cid = $(this).parent().attr('data-id');
        console.log(cid);
        setTimeout(function () {
            location.href = 'particulars.html?' + cid;
        }, 600);
    })




    //接收登录页传来的数据
    var storages = window.localStorage;
    var na = storages.getItem('user');
    var psweasy = storages.getItem('pass');
    //获取cookie 登陆状态



    if (na) {
        // var yh = cookie.get('name');
        $('.top ul').find('li').eq(0).html('您好，' + na + '欢迎来到健一网网上药店！ <a class="tuic">退出<a/>');
    } else {
        $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ] <i></i><i></i>');
    };

    //登陆用户、
    $('#denlu').on('click', function () {
        var urlS = window.location.href;
        storages.setItem('url', urlS);
        console.log(urlS);
        location.href = 'login.html?';
    });
    //点击注册跳到注册页
    $('#zhuc').on('click', function () {
        setTimeout(function () {
            location.href = 'reg.html';
        }, 800)
    })



    //删除cookie
    $('.tuic').on('click', function () {
        // confirm('确认退出?');
        if (confirm('确认退出?')) {
            $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ] <i></i><i></i>');
            storages.clear();
        }
    });


    //点击加入购物车 
    //1.判断有没登陆用户，
    //2.判断购物表表中有没这个商品，有就加一，没有就添加商品
    $('.listbox').on('click', '.join', function () {
        // console.log($(this).parent().parent().attr('data-id'));
        var user = cookie.get('name');
        var cid = $(this).parent().parent().attr('data-id');
        var lian = 1;
        if (na) {
            // console.log('jai')
            $.ajax({
                type: "post",
                url: '../api/cart-list.php',
                data: {
                    'user': na,
                    'cid': cid,
                    'lian': lian
                },
                success: function (str) {
                    console.log(str);
                    location.href = 'cart.html';
                }
            });
        } else {
            alert('请登陆');
        }
    })
})