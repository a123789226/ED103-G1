<?php
try{
  $loginInfo = json_decode($_POST["loginInfo"], true);
  require_once("./connectBooks.php");
  $sql = "select * from `member` where memId=:memId and memPsw=:memPsw"; 
  // $sql = "select * from `member` where memId=:memId and memPsw=:memPsw and point=:point
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $loginInfo["memId"]);
  $member->bindValue(":memPsw", $loginInfo["memPsw"]);
  // $member->bindValue(":point", $loginInfo["point"]);
  $member->execute();
  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
  	$result = array("memId"=>$memRow["memId"], "memName"=>$memRow["memName"], "oldPoint"=>$memRow["point"]);
  	$json = json_encode($result);

    //送出登入者的相關資料
    echo $json;
  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

