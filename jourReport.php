<?php
session_start();
$errMsg = "";

try{
    // header("connect-type: text/html; charset=utf-8");
    
    require_once('./connectAqua.php');
    $sql = "INSERT  INTO journal_message_report (memNo, aquaNo, msgNo, msgReportStatus, msgReportReason, msgReportDate)
            VALUES (?, ?, ?, ?, ?, now());";
    
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->bindValue(1, $_SESSION["memNo"]);
    $pdoStatement->bindValue(2, $_POST["aquaNo"]);
    $pdoStatement->bindValue(3, $_POST["msgNo"]);
    $pdoStatement->bindValue(4, '0');
    $pdoStatement->bindValue(5, $_POST["msgReportReason"]);

    
    $pdoStatement->execute();
    echo 'report successfully!';
 

}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    echo $errMsg ;
    }
?>