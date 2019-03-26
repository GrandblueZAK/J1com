<?php
    //连接数据库
    header("content-type:text/html;charset=utf-8");
    include 'conn.php';

    //接收数据
    $cid = isset($_POST['cid'])? $_POST['cid']:'';

    //查询数据库
    $sql = "SELECT * FROM list WHERE id=$cid";

    //执行语句
    $res = $conn->query($sql);

        //获取结果
    $all = $res->fetch_all(MYSQL_ASSOC);

    echo json_encode($all,JSON_UNESCAPED_UNICODE);

?>