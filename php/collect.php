<?php
try{
    session_start();
    require_once("../connectAqua.php");
    $sql = "SELECT *
    FROM member m
    join blog_mark b
    ON (m.memNo=b.memNo)
    WHERE m.memNo = :memNo AND b.blogNo = :blogNo"; 

    
    $blogMark = $pdo->prepare($sql);
    $blogMark->bindValue(":memNo", $_SESSION["memNo"]);
    $blogMark->bindValue(":blogNo", $_SESSION["blogNo"]);
    $blogMark->execute();
   


    if($blogMark->rowCount() == 0 ){
        echo '沒收藏';
    }else{
        echo '有收藏';
    }
    // var_dump($blogMark);
    // die;
    // $blogMarkRow = $blogMark->fetch(PDO::FETCH_ASSOC);


}catch(PDOException $e){
        echo "錯誤訊息:", $e->getLine(),"<br>";
        echo "錯誤訊息:", $e->getMessage(),"<br>";
}


?>