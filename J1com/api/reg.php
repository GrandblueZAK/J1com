<?php
    //连接数据库
    header("content-type:text/html;charset=utf-8");
    include 'conn.php';

    //接收数据
    $passw = isset($_POST['passw'])? $_POST['passw']:'';
    $name = isset($_POST['username'])? $_POST['username']:'';
   
 
    //插入表单
    $sql = "INSERT INTO user_inf (name,paws) VALUES ('$name','$passw')";
    //执行语句
    $res = $conn->query($sql);
   
    if($res){
        echo 1;//插入成功
    }else{
        echo 0;//插入失败
    }

    // $conn->close();
    $conn->close();

?>