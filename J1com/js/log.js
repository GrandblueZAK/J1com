$(function () {
    //扫码登陆
    var bian = true;
    $('.a2').on('click', function () {
        console.log('123');
        if (bian) {
            $(this).css('background', 'url(../img/reg/diannao.png)no-repeat center');
            $('.sys').css('display', 'block');

        } else if (!bian) {
            $(this).css('background', 'url(../img/reg/codeicon.png)no-repeat center');
            $('.sys').css('display', 'none');

        }
        bian = !bian;
    })
    //
    //登陆点击
    $('#boss2').on('click', function () {
        var yhm = $('#yh').val();
        var mima = $('#mima').val();
        $.ajax({
            type: "post",
            url: "../api/login.php",
            data: {
                'username': yhm,
                'passw': mima
            },
            success: function (str) {
                console.log(str);
                if (str == 1) {
                    alert('登陆成功');
                    if (url) {
                        if ($('#zd').prop('checked')) {//判断是否勾选
                            if (yhm && mima) {//非空
                                var storages = window.localStorage;
                                storages.setItem('user', yhm);
                                storages.setItem('pass', mima);

                            } else {
                                console.log('没勾选');
                            }
                        }
                        location.href = url;
                    } else {
                        location.href = '../index?' + yhm;
                    }
                } else if (str == 0) {
                    alert('失败');
                }
            }
        });
    });
    var storages = window.localStorage;
    var na = storages.getItem('user');
    var url = storages.getItem('url');
    var psweasy = storages.getItem('pass');
    $('#yh').val(na);
    $('#mima').val(psweasy);


})