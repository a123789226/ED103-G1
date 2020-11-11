<?php
ob_start();
session_start();
if (isset($_SESSION["memId"]) === true){
    //送出登入者的姓名資料
    $blogNo = $_POST["blogNo"];
    $memNo = $_SESSION["memNo"];
    try {
        require_once ('./php/connectBook.php');
        //查詢
        $sql = "SELECT memNo, blogNo from blog_mark where memNo = $memNo and blogNo = $blogNo";
        $pdoStatement = $pdo->query($sql);
        $prodRowCounts = $pdoStatement->rowCount();
        // echo $prodRowCounts;
        //新增
        if($prodRowCounts == 0){
            $sql_1 = "INSERT INTO `blog_mark` (`memNo`,`blogNo`) VALUES ($memNo, $blogNo);";
            $pdoStatement = $pdo->query($sql_1);
            echo "已加入收藏";
        }else{
            $sql_2="DELETE FROM `blog_mark` WHERE `memNo` = $memNo AND `blogNo` = $blogNo;";
            $pdoStatement = $pdo->query($sql_2);
            // echo "已移除收藏";
        }
        
    }
    
    catch(PDOException $e)
        {   
            echo $sql . "<br>" . $e->getMessage();
        }
  
}else    {
    echo "請登入後收藏";
}

?>