<?php 
	try {
		require("./connectAqua.php");
		$sql = "select o.ticketOrderNo, o.memNo, o.ticketOrderDate, o.ticketTotalPrice, l.ticketItemNo, l.ticketNo, l.ticketPerson, l.ticketListPrice from ticket_order_list l JOIN ticket_order o ON o.ticketOrderNo = l.ticketOrderNo";
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




