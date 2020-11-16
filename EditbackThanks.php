<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update thankscard set cardStatus=:cardStatus where cardNo=:cardNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":cardNo", $_POST["cardNo"]);
    $jourMsg->bindValue(":cardStatus", $_POST["cardStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




