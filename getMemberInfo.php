<?php 
session_start();
if(isset($_SESSION["memId"]) === true){
	$result = array("memId"=>$_SESSION["memId"], 
									"memName"=>$_SESSION["memName"],
									"memEmail"=>$_SESSION["memEmail"], 
									"memPhone"=>$_SESSION["memPhone"]);
	echo json_encode($result);
}else{
	echo "{}";
}
?>
