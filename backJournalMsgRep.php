<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from journal_message_report";
		$journalMsgRep = $pdo->query($sql);
		$journalMsgRep->execute();
		
		if($journalMsgRep -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backJournalMsgRepRow = $journalMsgRep->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backJournalMsgRepRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




