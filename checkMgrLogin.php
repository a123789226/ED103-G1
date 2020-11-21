<?php 
// 登入直接抓取session的資料
// session_start();
// if(isset($_SESSION["mgrId"]) === true){
// 	$result = array("mgrId"=>$_SESSION["mgrId"],
// 									"mgrStatus"=>$_SESSION["mgrStatus"]);
// 	echo json_encode($result);
// }else{
// 	echo "{}";
// }

session_start();
if(isset($_SESSION["mgrId"]) === true){
	try {
		require("connectAqua.php");

		$sql = "select * from `manager` where mgrId=:mgrId";
		
		$mgr = $pdo->prepare($sql);
		$mgr->bindValue(":mgrId", $_SESSION["mgrId"]);
		$mgr->execute();
		
		if($mgr->rowCount()==0){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			// 自資料庫中取回資料
			$mgrRow = $mgr->fetch(PDO::FETCH_ASSOC);
			// 將管理者資料重新寫入session
      $_SESSION["mgrNo"] = $mgrRow["mgrNo"];
      $_SESSION["mgrName"] = $mgrRow["mgrName"];
      $_SESSION["mgrId"] = $mgrRow["mgrId"];
      $_SESSION["mgrPsw"] = $mgrRow["mgrPsw"];
      $_SESSION["mgrStatus"] = $mgrRow["mgrStatus"];

      $result = array("mgrNo"=>$mgrRow["mgrNo"],
                      "mgrName"=>$mgrRow["mgrName"],
                      "mgrId"=>$mgrRow["mgrId"],
                      "mgrPsw"=>$mgrRow["mgrPsw"],
                      "mgrStatus"=>$mgrRow["mgrStatus"]);
      
			$json = json_encode($result);
			echo $json;
		}
	}catch(PDOException $e){  
		$error = array("errorMsg"=>$e->getMessage());
		echo json_encode($error);//{"errorMsg":"......."}
	}

}else{
	echo "{}";
}

?>




