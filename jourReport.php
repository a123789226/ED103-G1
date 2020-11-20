<?php
session_start();
$errMsg = "";

try{
    // header("connect-type: text/html; charset=utf-8");
    
    require_once('./connectAqua.php');

     //檢舉會員編號
    // $_SESSION['memNo']='1'; //檢舉會員編號
    // $_REQUEST['blogNo']='20';  //檢舉文章編號
    // $_REQUEST['blogReportReason']='hornyyy'; //檢舉原因
    //送出登入者的姓名資料
    $memNo = $_SESSION['memNo']; //檢舉會員編號
    $msgNo = $_SESSION['msgNo'];  //檢舉留言編號
    // $msgReportReason = $_SESSION['msgReportReason']; //檢舉原因 
    $msgReportReason = '1'; //檢舉原因

    $sql = "INSERT  INTO journal_message_report (memNo, msgNo, msgReportStatus, msgReportReason, msgReportDate)
            VALUES ('$memNo', '$msgNo', 'reporting', '$msgReportReason', now());";
    
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->execute();
    echo 'report successfully!';
 

    $msgReportNo = $pdo->lastInsertId();
}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    echo $errMsg ;
    }
?>