<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from night_info";
		$nightInfo = $pdo->query($sql);
		$nightInfo->execute();
		
		if($nightInfo -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backNightInfoRow = $nightInfo->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backNightInfoRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




