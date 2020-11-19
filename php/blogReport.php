<?php
$errMsg = "";

try{
    // header("connect-type: text/html; charset=utf-8");
    
    require_once('../connectAqua.php');
    
    session_start();
    //送出登入者的姓名資料
    $memNo = $_SESSION['memNo']; //檢舉會員編號
    $blogNo = $_REQUEST['blogNo'];  //檢舉文章編號
    $blogReportReason = $_REQUEST['blogReportReason']; //檢舉原因

    $sql = "INSERT  INTO blog_report (blogNo, memNo, blogReportReason, blogReportStatus)
            VALUES ('$blogNo', '$memNo', '$memNo', 'review' );";
    
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement = $pdo->query($sql);

    $blogReportNo = $pdo->lastInsertId();
}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    echo $errMsg ;
    }
?>