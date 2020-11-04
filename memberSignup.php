<?php
try{
  require_once("connectAqua.php");
  $sql = "select * from member where memId=:memId";

  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->execute();

  //如果找得到資料，取回資料，送出xml文件
  if($member->rowCount() == 0 ){ // 無此會員資料
    echo "notFound";
  }else{ 
   $sql = "INSERT INTO member(memId, memName, memPsw, memPhone, memEmail, memSex, memBirth)
  VALUES ('$memId', '$memName','$memPsw','$memPhone','$memEmail','$memSex','$memBirth');";

  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $memId);
  $member->bindValue(":memName", $memName);
  $member->bindValue(":memPsw", $memPsw);
  $member->bindValue(":memPhone", $memPhone);
  $member->bindValue(":memEmail", $memEmail);
  $member->bindValue(":memSex", $memSex);
  $member->bindValue(":memBirth", $memBirth);
  $member ->execute();
  
  $memRow = $member->fetch(PDO::FETCH_ASSOC);
  session_start();

  $_SESSION["memNo"] = $memRow["memNo"];
  $_SESSION["memId"] = $memRow["memId"];
  $_SESSION["memName"] = $memRow["memName"];
  $_SESSION["memPsw"] = $memRow["memPsw"];
  $_SESSION["memEmail"] = $memRow["memEmail"];
  $_SESSION["memPhone"] = $memRow["memPhone"];
  $_SESSION["memSex"] = $memRow["memSex"];
  $_SESSION["memBirth"] = $memRow["memBirth"];
  $_SESSION["Point"] = $memRow["Point"];
      
  //送出登入者的姓名資料
  $result = array("memNo"=>$memRow["memNo"], 
                  "memId"=>$memRow["memId"],
                  "memName"=>$memRow["memName"],
                  "memPsw"=>$memRow["memPsw"],
                  "memEmail"=>$memRow["memEmail"],
                  "memPhone"=>$memRow["memPhone"],
                  "memSex"=>$memRow["memSex"],
                  "memBirth"=>$memRow["memBirth"],
                  "Point"=>$memRow["Point"]);
// 註冊會員獲得點數
  $memNo = $_SESSION["memNo"];
  $sql = "UPDATE `member` set mem_pPoint= Point+8888 where memNo= $memNo ;";
  $memberStatment = $pdo->prepare($sql);
  $memberStatment->execute();

  $json = json_encode($result);
  // 送出登入者的資料
  echo $json;
  echo "Succeed";
  }
} catch (PDOException $e) {  
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>
