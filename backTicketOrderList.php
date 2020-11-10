<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from ticket_order_list";
		$ticketOrderList = $pdo->query($sql);
		$ticketOrderList->execute();
		
		if($ticketOrderList -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backTicketOrderListRow = $ticketOrderList->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backTicketOrderListRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




