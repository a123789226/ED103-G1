<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from night_order";
		$nightOrder = $pdo->query($sql);
		$nightOrder->execute();
		
		if($nightOrder -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backNightOrderRow = $nightOrder->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backNightOrderRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




