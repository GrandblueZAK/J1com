<?php
    //连接数据库
    header("content-type:text/html;charset=utf-8");
    include 'conn.php';
   

    //接收前端传来的数据;
    $page = isset($_POST['page']) ? $_POST['page']:'';
    $nums = isset($_POST['nums']) ? $_POST['nums']:'';
    $gn = isset($_POST['gn']) ? $_POST['gn']:'';

    // echo $page,$nums;是否能接收
    $index = ($page-1) * $nums;
    // echo $index;下标
    //查询数据库
    if($gn == 'd1'){
        $sql = "SELECT * FROM list ORDER BY  volume desc LIMIT $index,$nums";
    }else if($gn == 'd2'){
        $sql="SELECT * FROM list ORDER BY  discuss  desc LIMIT $index,$nums";
    }else if($gn == 'd3'){
        $sql="SELECT * FROM list ORDER BY  price  desc LIMIT $index,$nums";
    }

    //执行语句
    $res = $conn->query($sql);

    //获取结果
    $all = $res->fetch_all(MYSQL_ASSOC);
    
    // echo json_encode($all,JSON_UNESCAPED_UNICODE);

    // 查询整个表
    $sql2 = 'SELECT * FROM list';
    // //执行
    $res2 = $conn->query($sql2);

// var_dump($res2);

    $list = array(
        'data'=>$all,//查询的一段数据
        'total'=>$res2->num_rows,//数据的总条数
        'page'=>$page,//页数
        'num'=>$nums,//条数
        'in'=>$index
    );
    echo json_encode($list,JSON_UNESCAPED_UNICODE);
?>