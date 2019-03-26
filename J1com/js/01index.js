//轮播图banner
$(function () {
    //1.先将所有图放在可视区
    $('#list li').css('left', 0);
    //2.第一张先移到最上层;
    $('#list li').eq(0).css('opacity', 1).siblings().css('opactity', 0);

    //3.开启定时器
    var now = 0; //当前图片下标
    var timer = null;
    timer = setInterval(next, 3000);//定时器

    function next() {
        $('#list li').eq(now).animate({ 'opacity': 0 }, 700);
        now = ++now > $('#list li').length - 1 ? 0 : now;//临界值判断
        $('#list li').eq(now).animate({ 'opacity': 1 }, 700);
        follow();
    }
    //4.移入移出停止定时器
    $('#lunbo1').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(next, 3000);
    });

    //5.点击左右按钮切换上下张
    $('#next').click(function () {
        next();
        follow();
    });
    $('#prev').click(function () {
        prev();
        follow();
    });
    //点击切到上一张
    function prev() {
        $('#list li').eq(now).animate({ 'opacity': 0 }, 500);
        now = --now < 0 ? $('#list li').length - 1 : now;//临界值判断
        $('#list li').eq(now).animate({ 'opacity': 1 }, 500)
    }
    //6.生成下方焦点
    $('#list li').each(function (i, item) {
        $('#focus').append('<span>' + (i + 1) + '</span>');
    });
    //默认第一个焦点
    $('#focus span').eq(0).attr('class', 'active');

    //7.焦点跟随
    function follow() {
        //排它
        $('#focus span').eq(now).attr('class', 'active').siblings().attr('class', '');
    }
    //8.点击焦点切换到对应的图片
    $('#focus').on('mouseover', 'span', function (ev) {
        var ev = ev || window.event;

        if (now < $(this).index()) {
            //从右边往左切进来
            $('#list li').eq(now).stop().animate({ 'opacity': 0 }, 500);
            $('#list li').eq($(this).index()).stop().animate({ 'opacity': 1 }, 500);
            now = $(this).index();
        }
        if (now > $(this).index()) {
            //从左边往右切进来
            $('#list li').eq(now).stop().animate({ 'opacity': 0 }, 500);
            $('#list li').eq($(this).index()).stop().animate({ 'opacity': 1 }, 500);
            now = $(this).index();
        }
        follow();
    })
    //下拉菜单top
    $('#xiala1').hover(function () {
        $(this).children('h3').css('display', 'block');
    }, function () {
        $(this).children('h3').css('display', 'none');
    })
    $('#xiala2').hover(function () {
        $(this).children('div').css('display', 'block');
    }, function () {
        $(this).children('div').css('display', 'none');
    })



    /*
	    三，原理：出去一张，减掉拼接到尾部(核心)
		1.开启定时器，让ul往左边运动
		2.出去一张，就快速减掉拼接到尾部，ul归位
		3.点击上下按钮可以切换
	*/

    //一个li的宽度，每次运动的距离
    var iW = $('#imglist li').eq(0).outerWidth() * 3;

    //1.开启定时器，让ul往左边运动
    var timer2 = null;
    clearInterval(timer2);
    timer2 = setInterval(next2, 7000);//间隔2秒切一个图
    function next2() {
        //每次自动轮播下一张
        $('#moveimg').stop().animate({ 'left': -iW }, 400, 'linear', function () {
            //剪切第一张，接到末尾
            $('#moveimg li:nth-of-type(-n+3)').insertAfter($('#moveimg li:last'));
            $('#moveimg').css('left', 0);
        });
    }

    function prev2() {
        //上一张
        $('#moveimg li:last').insertBefore($('#moveimg li:first'));
        $('#moveimg li:last').insertBefore($('#moveimg li:first'));
        $('#moveimg li:last').insertBefore($('#moveimg li:first'));
        $('#moveimg').css('left', -iW);
        $('#moveimg').stop().animate({ 'left': 0 }, 400, 'linear');
    }

    //3.点击上下按钮可以切换

    $('#lunbo2').hover(function () {
        clearInterval(timer2);
    }, function () {
        clearInterval(timer2);
        timer2 = setInterval(next2, 7000);//间隔2秒切一个图
    });

    //点击下一张
    $('#next2').click(function () {
        next2();
    });

    //点击上一张
    $('#prev2').click(function () {
        prev2();
    });


    //class right 选项卡
    $('.cl-r-top>p a').on('mouseover', function () {
        // console.log($(this).index());
        $(this).addClass('act1').siblings().removeClass('act1');
        $('.cl-fu>div').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
        $('.cl-fu>div').eq($(this).index()).addClass('a1').siblings().removeClass('a1');
    })
    //\
    $('.cl-fu>div .hd li').on('mouseover', function () {
        // console.log($(this).index());
        $(this).addClass('on').siblings().removeClass('on');
        $('.cl-fu .a1').find('.bd li').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    })

    //main  hot
    //选项卡
    $('.h-top>p a').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.h-bottom>ul').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    })

    //图片移动
    $('.h-bottom ul li div a img').hover(function () {
        $(this).stop().animate({ 'left': 10 }, 300);
    }, function () {
        $(this).stop().animate({ 'left': 20 }, 300);
    })
    //

    //floor1
    $('.f-top:eq(0)>p a').on('mouseover', function () {
        $(this).addClass('color1').siblings().removeClass('color1');
        $('.f1-c .f1-huan').eq($(this).index()).css('display', 'block').siblings()
            .css('display', 'none');
    })
    //floor2
    $('.f-top:eq(1)>p a').on('mouseover', function () {
        console.log($(this));
        $(this).addClass('color1').siblings().removeClass('color1');
        $('.f2-c .f2-huan').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    })
    //


    //recommend lunbo3

    var kuan = $('.lunbo3 ul li').eq(0).outerWidth();
    // console.log(iw);
    //1.先将所有图放在右边
    $('.lunbo3 ul li').css('left', kuan);
    // console.log(kuan);

    //2.第一张先移到可视区;
    $('.lunbo3 ul li').eq(0).css('left', 0);

    //3.开启定时器
    var now3 = 0; //当前图片下标
    var timer3 = null;
    timer3 = setInterval(next3, 4000);//定时器

    function next3() {
        $('.lunbo3 ul li').eq(now3).stop().animate({ 'left': -kuan }, 1000);
        now3 = ++now3 > $('.lunbo3 ul li').length - 1 ? 0 : now3;//临界值判断
        $('.lunbo3 ul li').eq(now3).css('left', kuan);
        $('.lunbo3 ul li').eq(now3).stop().animate({ 'left': 0 }, 1000);
    }

    //4.移入移出停止定时器
    $('.re-b').hover(function () {
        clearInterval(timer3);
    }, function () {
        timer3 = setInterval(next3, 4000);
    });
    var ok = true;
    //5.点击左右按钮切换上下张
    $('.anniu a').eq(0).click(function () {
        if (ok) {
            prev3();
            ok = false;
            setTimeout(function () {
                ok = true;
            }, 1000);
        }
    });
    $('.anniu a').eq(1).click(function () {
        if (ok) {
            next3();
            ok = false;
            setTimeout(function () {
                ok = true;
            }, 1000);
        }
    });

    //点击切到上一张
    // console.log($('.lunbo3 ul li').length);
    function prev3() {
        $('.lunbo3 ul li').eq(now3).stop().animate({ 'left': kuan }, 1000);
        now3 = --now3 < 0 ? $('.lunbo3 ul li').length - 1 : now3;//临界值判断
        $('.lunbo3 ul li').eq(now3).css('left', -kuan);
        $('.lunbo3 ul li').eq(now3).stop().animate({ 'left': 0 }, 1000)
    }



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
        // follow();
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

    //接收登录页传来的数据
    var storages = window.localStorage;
    var na = storages.getItem('user');
    var psweasy = storages.getItem('pass');
    //获取cookie 登陆状态


    if (na) {
        // var yh = cookie.get('name');
        $('.top').find('li').eq(0).html('您好，' + na + '欢迎来到健一网网上药店！ <a class="tuic">退出<a/>');
    } else {
        $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ] <i></i><i></i>');
    };
    //删除cookie
    $('.tuic').on('click', function () {
        // confirm('确认退出?');
        if (confirm('确认退出?')) {
            $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ] <i></i><i></i>');
            storages.clear();
        }
    });


    //点击登陆
    $('#denlu').on('click', function () {
        var site = window.location.pathname;
        location.href = 'html/login.html?';
    });



    //点击跳到列表页
    $('#lunbo1 ul img').on('click', function () {
        setTimeout(function () {
            location.href = 'html/list.html';
        }, 1000);
    })

    //点击注册跳到注册页
    $('#zhuc').on('click', function () {
        setTimeout(function () {
            location.href = 'html/reg.html';
        },800)
    })

})