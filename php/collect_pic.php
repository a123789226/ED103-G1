<?php
session_start();
if (isset($_SESSION["memId"]) === true){
    //送出登入者的姓名資料
    $blogNo = $_POST["blogNo"];
    $memNo = $_SESSION["memNo"];
    try {
        require_once ('../connectAqua.php');
        //查詢
        $sql = "SELECT memNo , blogNo from blog_mark where memNo = $memNo and blogNo = $blogNo";
        $pdoStatement = $pdo->query($sql);
        $prodRowCounts = $pdoStatement->rowCount();
        echo $prodRowCounts;    
    }
    
    catch(PDOException $e)
        {   
            echo $sql . "<br>" . $e->getMessage();
        }
}

?>
