<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from aqua order by aquaNo desc";
		$Aqua = $pdo->query($sql);
		$Aqua->execute();
		
		if($Aqua -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backAquaRow = $Aqua->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backAquaRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




