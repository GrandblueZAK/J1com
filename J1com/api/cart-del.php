<?php
   //连接数据库
   header("content-type:text/html;charset=utf-8");
   include 'conn.php';

   //接收数据
   $cid = isset($_POST['cid'])? $_POST['cid']:'';
   $user = isset($_POST['user'])? $_POST['user']:'';
   $quan = isset($_POST['quan'])? $_POST['quan']:'';

   if($quan == 0){
        //删除单个商品语句
    $sql="DELETE FROM cart WHERE user='$user' and cid=$cid";
    //执行语句
    $res = $conn->query($sql);
   }else if($quan == 1){//删除多条商品数据

   }



//DELETE FROM cart WHERE user=123456 and cid=12;
?>