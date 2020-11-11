<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from ticket_order";
		$ticketOrder = $pdo->query($sql);
		$ticketOrder->execute();
		
		if($ticketOrder -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backTicketOrderRow = $ticketOrder->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backTicketOrderRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




