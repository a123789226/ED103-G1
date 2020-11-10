<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from nominate";
		$nominate = $pdo->query($sql);
		$nominate->execute();
		
		if($nominate -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backNominateRow = $nominate->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backNominateRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




