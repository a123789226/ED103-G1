<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from ticket_info";
		$ticketInfo = $pdo->query($sql);
		$ticketInfo->execute();
		
		if($ticketInfo -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backTicketInfoRow = $ticketInfo->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backTicketInfoRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




