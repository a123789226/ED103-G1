<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from journal";
		$journal = $pdo->query($sql);
		$journal->execute();
		
		if($journal -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backJournalRow = $journal->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backJournalRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




