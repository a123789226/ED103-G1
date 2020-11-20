<?php
session_start();
$errMsg = "";

try{
    // header("connect-type: text/html; charset=utf-8");
    
    require_once('../connectAqua.php');
     //檢舉會員編號
    // $_SESSION['memNo']='1'; //檢舉會員編號
    // $_REQUEST['blogNo']='20';  //檢舉文章編號
    // $_REQUEST['blogReportReason']='hornyyy'; //檢舉原因
    //送出登入者的姓名資料
    $memNo = $_SESSION['memNo']; //檢舉會員編號
    $blogNo = $_REQUEST['blogNo'];  //檢舉文章編號
    $blogReportReason = $_REQUEST['blogReportReason']; //檢舉原因

    $sql = "INSERT  INTO blog_report (blogNo, memNo, blogReportReason, blogReportStatus)
            VALUES ('$blogNo', '$memNo', '$blogReportReason', '0' );";
    
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->execute();
    echo 'report successfully!';
 

    $blogReportNo = $pdo->lastInsertId();
}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    echo $errMsg ;
    }
?>