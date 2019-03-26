$(function () {
    var re1 = false;
    var re2 = false;
    var re3 = false;
    var re4 = false;
    var re5 = false;
    $('#mobile').focus(function () {
        $(this).css('border', '1px solid #e2e2e2');
        $('#t1').css('display', 'none');
        $('#s1').css('display', 'none');
    })
    $('#mobile').on('blur', function () {
        var _mobile = $('#mobile').val();
        // console.log(_mobile);
        if (_mobile) {//非空
            if (checkReg.tel(_mobile)) {//正则
                $('#t1').css('display', 'none');

                $.ajax({
                    type: "post",
                    url: "../api/checkname.php",
                    data: {
                        'username': _mobile
                    },
                    success: function (str) {
                        // console.log(str);
                        if (str == 0) {
                            $('#s1').css('display', 'block');
                            re1 = true;
                        } else if (str == 1) {
                            $('#t1').css('display', 'block');
                            $('#t1 span').html('该手机已被注册');
                        }
                    }
                });
            } else {
                $(this).css('border', '1px solid red');
                $('#t1').css('display', 'block');
                $('#t1 span').html('手机号码格式不正确！');
            }
        } else {
            $(this).css('border', '1px solid red');
            $('#t1').css('display', 'block');
            $('#t1 span').html('手机号不能为空！');
        }
    });
    //
    //pas
    $('#psw').focus(function () {
        $(this).css('border', '1px solid #e2e2e2');
        $('#t2').css('display', 'none');
        $('#s2').css('display', 'none');
    })
    $('#psw').on('blur', function () {
        var _psw = $('#psw').val();
        // console.log(_psw);
        if (_psw) {//非空
            if (checkReg.passW(_psw)) {
                // console.log('123');
                re2 = true;
                $('#mmqd').css('background', 'url(../img/reg/miniloginbg.png)no-repeat 0 -114px');

                if (_psw.match(".*[a-z]+.*")) {//是否包含小写字母
                    // console.log(_psw.match(".*[a-z]+.*"));
                    if (_psw.match(".*[A-Z]+.*")) {//是否有大写字母
                        // console.log(_psw.match(".*[a-z]+.*"));
                        $('#mmqd').css('background', 'url(../img/reg/miniloginbg.png)       no-repeat 0 -129px');
                        if (_psw.match(".*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]{}\"]+.*")) {//是否含有特殊字符
                            $('#mmqd').css('background', 'url(../img/reg/miniloginbg.png)no-repeat 0 -144px');
                        }
                    }
                }
                $('#s2').css('display', 'block');
            } else {
                $(this).css('border', '1px solid red');
                $('#t2').css('display', 'block');
                $('#t2 span').html('6-20个大小写英文字母，符号或数字');
            }
        } else {
            $(this).css('border', '1px solid red');
            $('#t2').css('display', 'block');
            $('#t2 span').html('密码不能为空！');
        }
    });
    //
    // border: 1px solid #e2e2e2;
    //p-again
    $('#p-again').focus(function () {
        $(this).css('border', '1px solid #e2e2e2');
        $('#t3').css('display', 'none');
        $('#s3').css('display', 'none');
    })
    $('#p-again').on('blur', function () {
        var _pAgain = $('#p-again').val();
        if (_pAgain) {//非空判断
            if (checkReg.apassW(_pAgain, $('#psw').val())) {//判断密码是否一致
                // console.log('qwe');
                $('#s3').css('display', 'block');
                re3 = true;
            } else {
                // console.log('123')
                $('#t3').css('display', 'block');
                $('#t3 span').html('两次密码输入不一致，请重新输入！');
            }
        } else {
            $(this).css('border', '1px solid red');
            $('#t3').css('display', 'block');
            $('#t3 span').html('请再次输入密码！');
        }
    });

    //生成随机验证码
    $('#shuiji').on('click', function () {
        $(this).val(randomCode());
    });
    //验证
    $('#queren').on('click', function () {

        if ($('#shuiji').val().toLowerCase() == $('#yzm').val().toLowerCase()) {
            alert('正确');
            re4 = true;
        } else {
            alert('验证码不对');
        }
    })

    //

    //reg
    $('#boss').on('click', function () {
        if ($('#xy').prop('checked')) {
            // console.log('123');
            re5 = true;
        } else if (!$('#xy').prop('checked')) {
            // console.log('234')
        }
        if (re1 && re2 && re3 && re4 && re5) {
            // console.log('11');
            $.ajax({
                type: "post",
                url: "../api/reg.php",
                data: {
                    'username': $('#mobile').val(),
                    'passw': $('#psw').val()
                },
                success: function (str) {
                    if (str) {
                        alert('注册成功');
                      
                        location.href = 'login.html';
                    }
                }
            });
        } else {
            // console.log('22');
        }
    })
})