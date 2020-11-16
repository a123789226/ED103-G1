<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update manager set mgrStatus=:mgrStatus where mgrNo=:mgrNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":mgrNo", $_POST["mgrNo"]);
    $jourMsg->bindValue(":mgrStatus", $_POST["mgrStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




