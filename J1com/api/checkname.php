<?php
 include 'conn.php';

 //接收用户名 ：isset();
 //$name = $_POST['username'];
 $name = isset( $_POST['username'])? $_POST['username']:'';

//查询
$sql = "SELECT *FROM user_inf WHERE name = '$name'";

//结果集
$res = $conn->query($sql);

//num_rows属性 0代表没有  1代表有
if($res->num_rows){
    echo '1';
}else{
    echo '0';
}

$res->close();
$conn->close();

?>