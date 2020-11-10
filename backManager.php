<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from manager";
		$manager = $pdo->query($sql);
		$manager->execute();
		
		if($manager -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backManagerRow = $manager->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backManagerRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




