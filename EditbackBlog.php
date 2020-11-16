<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update blog set blogStatus=:blogStatus where blogNo=:blogNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":blogNo", $_POST["blogNo"]);
    $jourMsg->bindValue(":blogStatus", $_POST["blogStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




