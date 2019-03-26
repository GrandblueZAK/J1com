<?php

//连接conn.php 数据库
header("content-type:text/html;charset=utf-8");
include 'conn.php';

$name = isset($_POST['username'])?$_POST['username']:'';
$passw = isset($_POST['passw'])?$_POST['passw']:'';

//查询语句
$sql = "SELECT *FROM user_inf WHERE name='$name' AND paws='$passw'";

//执行语句
$res = $conn->query($sql);

if($res->num_rows){
    echo 1;//有，成功
}else{
    echo 0;//没有这个用户，失败
}
    $conn->close();
?>