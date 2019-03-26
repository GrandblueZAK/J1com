<?php
    //连接数据库
    header("content-type:text/html;charset=utf-8");
    include 'conn.php';

    //接收数据 
    $user = isset($_POST['user'])? $_POST['user']:'';
    // echo $user;

    //语句 //合并两个biao 
    $sql="SELECT * FROM cart,list where cart.cid = list.id and user=$user";
    //执行语句
    $res = $conn->query($sql);
    $all = $res->fetch_all(MYSQL_ASSOC);

    echo json_encode($all,JSON_UNESCAPED_UNICODE);

//SELECT *FROM cart,list where cart.cid = list.id and user=123456;


?>