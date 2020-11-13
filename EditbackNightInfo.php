<?php 
	try {
    require("./connectAqua.php");
		$sql = "update night_info set areaCapacity=:areaCapacity, areaPrice=:areaPrice where areaNo=:areaNo";
		$nightInfo = $pdo->prepare($sql);
    $nightInfo->bindValue(":areaNo", $_POST["areaNo"]);
    $nightInfo->bindValue(":areaCapacity", $_POST["areaCapacity"]);
    $nightInfo->bindValue(":areaPrice", $_POST["areaPrice"]);
    
		$nightInfo->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




