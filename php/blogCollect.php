<?php
try{
    session_start();
    require_once("./connectBook.php");

    $sql1 = "SELECT blogNo FROM  blog_mark WHERE memNo = :memNo "; 
    $blogMark = $pdo->prepare($sql1);
    $blogMark->bindValue(":memNo",  $_SESSION["memNo"]);
    $blogMark->execute();

    $blogMarkRows = $blogMark->fetchAll(PDO::FETCH_ASSOC);
    $json = JSON_encode($blogMarkRows);
    echo $json;

    }catch(PDOException $e){
            echo "錯誤訊息:", $e->getLine(),"<br>";
            echo "錯誤訊息:", $e->getMessage(),"<br>";
    }
?>