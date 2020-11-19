<?php
try{
    session_start();
    require_once("../connectAqua.php");
    $sql = "INSERT INTO blog_mark (memNo, blogNo) VALUES (:memNo,:likework)"; 

        // var_dump($_POST["CAM_NO"]);
        // die;
        $blogMark = $pdo->prepare($sql); //先編譯好

        $blogMark->bindValue(":memNo", $_SESSION["memNo"]);
        $blogMark->bindValue(":likework", $_POST["likework"]);
        $blogMark->execute();//執行之
        // $blogMarkNo = $pdo->lastInsertId();

    echo '異動成功';
    }catch(PDOException $e){
            echo "錯誤訊息:", $e->getLine(),"<br>";
            echo "錯誤訊息:", $e->getMessage(),"<br>";
    }
?>