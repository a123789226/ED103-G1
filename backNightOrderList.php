<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from night_order_list";
		$nightOrderList = $pdo->query($sql);
		$nightOrderList->execute();
		
		if($nightOrderList -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backNightOrderListRow = $nightOrderList->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backNightOrderListRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




