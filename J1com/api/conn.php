<?php
    //连接数据库
    header("content-type:text/html;charset=utf-8");
    //配置参数
    $servername = 'localhost';//主机名
    $username = 'root';//用户名
    $passname = '';//密码
    $dbname = '2080ti';//连接的库名

    //建立链接 $conn
    $conn = new mysqli($servername,$username,$passname,$dbname);
    $conn->query("SET NAMES utf8");//编码

    //判断是否成功
    if($conn->connect_error){
        die('出错的原因:'.$conn->connect_error);
    }
?>