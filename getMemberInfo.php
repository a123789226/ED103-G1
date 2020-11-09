<?php 
// 登入直接抓取session的資料
// session_start();
// if(isset($_SESSION["memId"]) === true){
// 	$result = array("memNo"=>$_SESSION["memNo"],
// 									"memName"=>$_SESSION["memName"],
// 									"memId"=>$_SESSION["memId"],
// 									"memPsw"=>$_SESSION["memPsw"], 
// 									"memEmail"=>$_SESSION["memEmail"], 
// 									"memSex"=>$_SESSION["memSex"], 
// 									"memPhone"=>$_SESSION["memPhone"],
// 									"memBirth"=>$_SESSION["memBirth"],
// 									"memPic"=>$_SESSION["memPic"],
// 									"memStatus"=>$_SESSION["memStatus"],
// 									"point"=>$_SESSION["point"]);
// 	echo json_encode($result);
// }else{
// 	echo "{}";
// }

// 登入重新使用用session內的memId是否存在，然後從資料庫再抓一次JSON資料傳回去
session_start();
if(isset($_SESSION["memId"]) === true){
	try {
		require("connectAqua.php");

		$sql = "select * from `member` where memId=:memId";
		
		$member = $pdo->prepare($sql);
		$member->bindValue(":memId", $_SESSION["memId"]);
		$member->execute();
		
		if($member->rowCount()==0){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			// 自資料庫中取回資料
			$memRow = $member->fetch(PDO::FETCH_ASSOC);
			// 將登入會員資料寫入session
			$_SESSION["memNo"] = $memRow["memNo"];
			$_SESSION["memName"] = $memRow["memName"];
			$_SESSION["memId"] = $memRow["memId"];
			$_SESSION["memPsw"] = $memRow["memPsw"];
			$_SESSION["memEmail"] = $memRow["memEmail"];
			$_SESSION["memSex"] = $memRow["memSex"];
			$_SESSION["memPhone"] = $memRow["memPhone"];
			$_SESSION["memBirth"] = $memRow["memBirth"];
			$_SESSION["memPic"] = $memRow["memPic"];
			$_SESSION["memStatus"] = $memRow["memStatus"];
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
											"memStatus"=>$memRow["memStatus"],
											"point"=>$memRow["point"]);
			
			$json = json_encode($result);
			// 送出登入者的資料
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




