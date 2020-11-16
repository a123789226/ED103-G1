<?php
try{
  // $_POST["aquaNo"]="1";
  // $_POST["aquaName"]="Tony";

  require_once("./connectAqua.php");
  $sql = "select c.msgContent, c.msgTime, m.memName, m.memPic 
  from journal_message c join member m on(c.memNo = m.memNo) 
  where c.aquaNo =:aquaNo and msgStatus in ('正常',0) 
  order by c.msgTime DESC;";
 
  $comment = $pdo->prepare($sql);
  $comment->bindValue(":aquaNo", 1);
  $comment->execute();
  if($comment->rowCount()==0){ // 無留言
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $commentRows = $comment->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
        $result = array();


        $i = 0;
        foreach($commentRows as $commentRow)
        {
        $result[$i] = array("msgContent"=>$commentRow["msgContent"], "msgTime"=>$commentRow["msgTime"],"memName"=>$commentRow["memName"],"memPic"=>$commentRow["memPic"]);
            $i++;

      }
            echo  json_encode($result);
  }

  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

