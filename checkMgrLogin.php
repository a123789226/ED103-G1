<?php 
// 登入直接抓取session的資料
session_start();
if(isset($_SESSION["mgrId"]) === true){
	$result = array("mgrId"=>$_SESSION["mgrId"],
									"mgrStatus"=>$_SESSION["mgrStatus"]);
	echo json_encode($result);
}else{
	echo "{}";
}
?>




