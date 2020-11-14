<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update journal_message set msgStatus=:msgStatus where msgNo=:msgNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":msgNo", $_POST["msgNo"]);
    $jourMsg->bindValue(":msgStatus", $_POST["msgStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




