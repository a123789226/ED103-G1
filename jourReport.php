<?php
session_start();
$errMsg = "";

if(isset($_SESSION["memId"]) === true){ //有登入會員
    try{
        require_once("./connectAqua.php");
        $sql = "INSERT INTO `journal_message` 
                (memNo,
                aquano,
                msgContent,
                msgTime,
                msgStatus)
    
                VALUES
                (:MEMNO,
                :AQUANO,
                :WORD,
                now(),
                '0');";
        $comment = $pdo->prepare($sql);
        $comment-> bindValue(':MEMNO',$_SESSION['memNo']);  //(對應sql,對應值) <-$_REQUEST['member']
        $comment-> bindValue(':AQUANO',$_REQUEST['aquano']);
        $comment-> bindValue(':WORD',$_REQUEST['word']);
        $comment-> execute();
        $commentId = $pdo->lastInsertId();
    
        // echo $test[0] , $test[1] , '<br>' , $_REQUEST['RES_MESSAGE_WORD'];
        if($comment->rowCount()==0){
            echo '資料有誤';
        }else{
            $result = $comment->fetchAll(PDO::FETCH_ASSOC);
            echo JSON_encode($result);
        }
        
    }catch(PDOException $e){
        $error = array("errorMsg"=>$e->getMessage());
          echo json_encode($error);//{"errorMsg":"......."}
    }
  }



try{
    // header("connect-type: text/html; charset=utf-8");
    
    require_once('./connectAqua.php');

     //檢舉會員編號
    // $_SESSION['memNo']='1'; //檢舉會員編號
    // $_REQUEST['blogNo']='20';  //檢舉文章編號
    // $_REQUEST['blogReportReason']='hornyyy'; //檢舉原因
    //送出登入者的姓名資料
    $memNo = $_SESSION['memNo']; //檢舉會員編號
    $msgNo = $_REQUEST['msgNo'];  //檢舉留言編號
    $msgReportReason = $_REQUEST['msgReportReason']; //檢舉原因

    $sql = "INSERT  INTO journal_message_report (memNo, msgNo, msgReportStatus, msgReportReason)
            VALUES ('$memNo', '$msgNo', 'reporting', '$msgReportReason' );";
    
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