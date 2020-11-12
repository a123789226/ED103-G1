<?php
try{
  require_once("./connect_aqua.php");
  $sql = "select b.blogPic , b.blogTitle , b.blogTags from blog b join member m on(m.memNo = b.memNo) where m.memId =:id;";
 
  $member = $pdo->prepare($sql);
  $member->bindValue(":id", $_POST["id"]);
  $member->execute();
  if($member->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $memberRows = $member->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
        $result = array();


        $i = 0;
        foreach($memberRows as $memberRow)
        {
        $result[$i] = array("blogPic"=>$memberRow["blogPic"], "blogTitle"=>$memberRow["blogTitle"],"blogTags"=>$memberRow["blogTags"]);
            $i++;

      }
            echo  json_encode($result);
  }

  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

