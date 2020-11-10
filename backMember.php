<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from member";
		$member = $pdo->query($sql);
		$member->execute();
		
		if($member -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backMemerRow = $member->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backMemerRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




