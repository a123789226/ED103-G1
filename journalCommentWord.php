<?
$ErrMsg='';
try{
    require_once("./php/connectBook.php");
    $sql = "INSERT INTO `journal_message` 
            (memNo,
            jourNo,
            msgContent,
            msgTime,
            msgStatus)

            VALUES
            (:MEMNO,
            :JOURNO,
            :WORD,
            now(),
            '0');";
    $comment = $pdo->prepare($sql);
    $comment-> bindValue(':MEMNO',$_REQUEST['member']);  //(對應sql,對應值) <-$_REQUEST['member']
    $comment-> bindValue(':JOURNO',$_REQUEST['journo']);
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
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>