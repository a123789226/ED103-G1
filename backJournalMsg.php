<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from journal_message";
		$journalMsg = $pdo->query($sql);
		$journalMsg->execute();
		
		if($journalMsg -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backJournalMsgRow = $journalMsg->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backJournalMsgRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




