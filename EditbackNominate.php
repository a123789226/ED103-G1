<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update nominate set nomStatus=:nomStatus where nameNo=:nameNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":nameNo", $_POST["nameNo"]);
    $jourMsg->bindValue(":nomStatus", $_POST["nomStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




