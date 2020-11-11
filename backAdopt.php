<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from adopt";
		$adopt = $pdo->query($sql);
		$adopt->execute();
		
		if($adopt -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backAdoptRow = $adopt->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backAdoptRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




