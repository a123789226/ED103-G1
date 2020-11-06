<?php 
session_start();
if(isset($_SESSION["memId"]) === true){
	$result = array("memNo"=>$_SESSION["memNo"],
									"memName"=>$_SESSION["memName"],
									"memId"=>$_SESSION["memId"],
									"memPsw"=>$_SESSION["memPsw"], 
									"memEmail"=>$_SESSION["memEmail"], 
									"memSex"=>$_SESSION["memSex"], 
									"memPhone"=>$_SESSION["memPhone"],
									"memBirth"=>$_SESSION["memBirth"],
									"memPic"=>$_SESSION["memPic"],
									"memStatus"=>$_SESSION["memStatus"],
									"point"=>$_SESSION["point"]);
	echo json_encode($result);
}else{
	echo "{}";
}
?>


