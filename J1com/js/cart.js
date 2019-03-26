$(function () {

    var storages = window.localStorage;
    var user = storages.getItem('user');
    var psweasy = storages.getItem('pass');
    // console.log(na);
    $.ajax({
        type: "post",
        url: "../api/cart-init.php",
        data: {
            'user': user
        },
        success: function (str) {

            // console.log(str);
            var arrs = JSON.parse(str);
            // console.log(arrs);
            var res = arrs.map(function (item) {
                return `<div class="t-th" data-id="${item.cid}">
                    <h2>
                        <span>包裹1</span>
                    </h2>
                    <div class="t-box">
                        <ul class="clearfix">
                            <li>
                                <input type="checkbox" class="ck">
                            </li>
                            <li>
                                <img src="${item.img}" alt="">
                            </li>
                            <li>${item.con}</li>
                            <li>06-05057</li>
                            <li>MF-TN1501</li>
                            <li>${item.man}</li>
                            <li>${item.price}.00</li>
                            <li>
                                <a href="###" class="jian">-</a>
                                <input type="text" value="${item.quan}" class="nownum">
                                <a href="###" class="jia">+</a>
                            </li>
                            <li class="good_total">${item.price * item.quan}.00</li>
                            <li><a href="" class="del">删除</a></li>
                        </ul>
                    </div>
                </div> 
                `
            }).join('');
            // console.log(res);
            $('.t-bod').html(res);
            // console.log()
            have();
            function have() {
                if ($('.t-th').length <= 0) {
                    $('.t-bod').html('<div class="t-td">您还没有商品</div>')
                } else {
                    $('.t-bod').html(res);
                }
            }



            //
            var res2 = ` <li>
            产品数量总计：<span class="spsl">${spsl()}</span>
                </li>
                <li><i>税费：</i><span>￥0.00</span> </li>
                <li><i>运费：</i> (以结算时为准) </li>
                <li><i>总计: </i><span id="zj1">￥ 00.00 </span></li>
                <li><i>优惠后金额：</i><span id="zj2"> 00.00 元</span></li>
            `;
            $('.t-agg').html(res2);

            function spsl() {//商品数量
                var spsl = $('.t-th').length;
                $('.spsl').html(spsl);
                // numPrice();
                return spsl;
            }
            // console.log(spsl());

            //
            //点击加减改变商品数量
            $('.t-bod').on('click', '.jia', function () {//加
                // console.log($(this).prev().val());
                var zhi1 = $(this).prev().val() * 1;
                var dan = $(this).parent().prev().html() * 1;
                var cid = $(this).parent().parent().parent().parent().attr('data-id');
                console.log(cid);
                zhi1++;
                $(this).prev().val(zhi1);
                $(this).parent().next().html((zhi1 * dan).toFixed(2));
                // console.log(dan,zhi1);
                subTotal($(this));
                numPrice();
                $.ajax({
                    type: "post",
                    url: "../api/cart-c.php",
                    data: {
                        'user': user,
                        'cid': cid,
                        'lian': zhi1
                    },
                    success: function (str) {
                        // console.log(str)
                    }
                });

            });
            $('.t-bod').on('click', '.jian', function () {//减
                // console.log($(this).next().val());
                var zhi2 = $(this).next().val();
                var dan = $(this).parent().prev().html() * 1;
                var cid = $(this).parent().parent().parent().parent().attr('data-id');
                zhi2--;
                if (zhi2 <= 1) {
                    zhi2 = 1;
                }
                $(this).next().val(zhi2);
                $(this).parent().next().html((zhi2 * dan).toFixed(2));
                subTotal($(this));
                numPrice();
                $.ajax({
                    type: "post",
                    url: "../api/cart-c.php",
                    data: {
                        'user': user,
                        'cid': cid,
                        'lian': zhi2
                    },
                    success: function (str) {
                        // console.log(str)
                    }
                });

            });

            //

            //3.小计的费用： 单价*数量
            //加减点击时计算 封装
            function subTotal(now) {
                //单价
                var price = now.parent().prev().html();
                // console.log(price, num);
                //数量
                var num = now.parent().find('input').val() * 1;
                // console.log(price, num);
                //小计 = 单价*数量;
                var total = (price * num).toFixed(2);
                now.parent().next().html(total);//小计
            }
            // console.log($('.t-bod .ck').length);
            //6.总数量和总价
            var arr = [];//存储被选中行的下标
            function numPrice() {
                arr = [];
                for (var i = 0; i < $('.t-bod .ck').length; i++) {
                    if ($('.t-bod .ck').eq(i).prop('checked')) {
                        arr.push(i);
                    }
                }
                if (arr.length == $('.t-bod .ck').length) {
                    //相等表示所有的商品被选中，全选按键也勾上
                    $('#quanx').prop('checked', 'checked');
                } else {
                    $('#quanx').prop('checked', '');
                }
                var priceAll = 0;//总价
                var numAll = 0;//总数量

                for (var i = 0; i < arr.length; i++) {
                    numAll += $('.nownum').eq(arr[i]).val() * 1;
                    priceAll += $('.good_total').eq(arr[i]).text() * 1;
                }
                $('#yixuan').html(numAll);//总数量
                $('#zj1').html('￥' + priceAll.toFixed(2));
                $('#zj2').html(priceAll.toFixed(2) + '元');
                $('#zj3').html('￥' + priceAll.toFixed(2));
            }

            //

            //5.选中单行
            $('.t-bod').on('click', '.ck', function () {
                numPrice();
                if ($(this).prop('checked')) {
                    $(this).parent().parent().parent().css('background', '#FFF4E8');
                } else {
                    $(this).parent().parent().parent().css('background', 'white')
                }
            })
            //

            //是否删除商品（单条）
            $('.t-bod').on('click', '.del', function () {
                // console.log($(this));
                // console.log($(this).parent().parent().parent().parent());
                // $(this).parent().parent().parent().parent().css('background','red');
                var cid = $(this).parent().parent().parent().parent()
                    .attr('data-id');
                // console.log(ad);
                numPrice();
                spsl();
                have();
                if (confirm('是否删除？')) {
                    $.ajax({
                        type: "post",
                        url: "../api/cart-del.php",
                        data: {
                            'quan': 0,//删除单条数据
                            'user': user,
                            'cid': cid
                        },
                        success: function (str) {
                            // console.log('删除成功');
                        }
                    });
                }

            });
            //


            //全选给勾上时，其他全部给勾上
            $('#quanx').on('click', function () {
                // console.log($('.ck').length);
                if ($(this).prop('checked')) {
                    $('.ck').prop('checked', 'checked');
                    $('.ck').parent().parent().parent().css('background', '#FFF4E8');
                } else if (!$(this).prop('checked')) {
                    // console.log('12');
                    // console.log($('.ck').length);
                    $('.ck').prop('checked', '');
                    $('.ck').parent().parent().parent().css('background', 'white');
                }
                numPrice();
            });


            //批量删除
            $('#batch').on('click', function () {
                if (confirm('是否删除')) {
                    $('.ck').each(function () {
                        if ($(this).prop('checked')) {
                            $(this).parent().parent().parent().parent().remove();
                            var cid = $(this).parent().parent().parent().parent().attr('data-id');
                            numPrice();
                            have();
                            $.ajax({
                                type: "post",
                                url: "../api/cart-del.php",
                                data: {
                                    'quan': 0,//删除单条数据
                                    'user': user,
                                    'cid': cid
                                },
                                success: function (str) {

                                }
                            });
                        }
                    });
                }
            })

            //



        }
    });


    if (user) {
        // var yh = cookie.get('name');
        $('.top').find('li').eq(0).html('您好，' + user + '欢迎来到健一网网上药店！ <a class="tuic">退出<a/>');
    } else {
        $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##"  id="zhuc">注册</a> ] <i></i><i></i>');
    };
    //删除cookie
    $('.tuic').on('click', function () {
        // confirm('确认退出?');
        if (confirm('确认退出?')) {
            $('.top').find('li').eq(0).html('您好， 欢迎来到健一网网上药店！ [ <a href="###" id="denlu">登陆</a> ] [ <a href="##" id="zhuc">注册</a> ] <i></i><i></i>');
            storages.clear();
        }

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
        });











    });
















    //
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




})