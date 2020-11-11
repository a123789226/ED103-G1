<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from thankscard";
		$thankscard = $pdo->query($sql);
		$thankscard->execute();
		
		if($thankscard -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backThankscardRow = $thankscard->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backThankscardRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




