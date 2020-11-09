<?php 

try {
require("connect_aqua.php");

$sql = "select * from `member` where memId=:memId and memPsw=:memPsw and memStatus=0;";
$member = $pdo->prepare($sql);
$member->bindValue(":memId", $_POST["memId"]);
$member->bindValue(":memPsw", $_POST["memPsw"]);
$member->execute();
  
  if($member->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
    session_start();
    $_SESSION["memNo"] = $memRow["memNo"];
    $_SESSION["memName"] = $memRow["memName"];
    $_SESSION["memId"] = $memRow["memId"];
    $_SESSION["memPsw"] = $memRow["memPsw"];
    $_SESSION["memEmail"] = $memRow["memEmail"];
    $_SESSION["memSex"] = $memRow["memSex"];
    $_SESSION["memPhone"] = $memRow["memPhone"];
    $_SESSION["memBirth"] = $memRow["memBirth"];
    $_SESSION["memPic"] = $memRow["memPic"];
    $_SESSION["point"] = $memRow["point"];

    $result = array("memNo"=>$memRow["memNo"],
                    "memName"=>$memRow["memName"],
                    "memId"=>$memRow["memId"],
                    "memPsw"=>$memRow["memPsw"],
                    "memEmail"=>$memRow["memEmail"],
                    "memSex"=>$memRow["memSex"],
                    "memPhone"=>$memRow["memPhone"],
                    "memBirth"=>$memRow["memBirth"],
                    "memPic"=>$memRow["memPic"],
                    "point"=>$memRow["point"]);
    
    $json = json_encode($result);
    // 送出登入者的資料
    echo $json;
  }
} catch (PDOException $e) {  
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>
