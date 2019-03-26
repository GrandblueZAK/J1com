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
        $sql2="UPDATE cart SET quan=quan+1 where user='$user' AND cid=$cid ";
        //在有该商品的基础上加一
        $res2 = $conn->query($sql2);
        // echo '11';
    }else{
        $sql3="INSERT INTO cart (user,cid,quan)
        VALUES ('$user', $cid, $lian)";
         $res3 = $conn->query($sql3);
        // echo '22';
    }

?>