<?php
     //连接数据库
     header("content-type:text/html;charset=utf-8");
     include 'conn.php';

     //接收数据
     $cid = isset($_POST['cid'])? $_POST['cid']:'';
     $user = isset($_POST['user'])? $_POST['user']:'';
     $lian = isset($_POST['lian'])? $_POST['lian']:'';
     // echo $cid,$user,$lian;
     //查询是否有该商品cid
     $sql = "SELECT * FROM cart WHERE user=$user AND cid=$cid ";
     //执行语句
     $res = $conn->query($sql);
     $num=$res->num_rows;//判断有无
     // echo $num;

     if($num){//有该商品
         $sql2="UPDATE cart SET quan=$lian where user='$user' AND cid=$cid ";
         //在购物车中，改变数量  数量直接等于购物车中数量
         $res2 = $conn->query($sql2);
         echo '0';
     }else{
        echo '1';
     }



?>