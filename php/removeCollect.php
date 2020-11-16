<?php
try{
    session_start();
    require_once("./connectBook.php");
    $sql = "DELETE FROM `blog_mark` WHERE (memNo=:memNo) AND (blogNo=:likework)"; 

        // var_dump($_SESSION["MEMNO"]);
        // die;
        $blogMark = $pdo->prepare($sql); //先編譯好

        $blogMark->bindValue(":memNo", $_SESSION["memNo"]);
        $blogMark->bindValue(":likework", $_POST["likework"]);
        $blogMark->execute();//執行之


    }catch(PDOException $e){
            echo "錯誤訊息:", $e->getLine(),"<br>";
            echo "錯誤訊息:", $e->getMessage(),"<br>";
    }
?>