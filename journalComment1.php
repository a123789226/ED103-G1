<?php
  session_start();

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
  }else{
    echo "OhOh";
  }
?>
