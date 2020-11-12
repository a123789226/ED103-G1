<?php 
	try {
    require("./connectAqua.php");
		$sql = "update ticket_info set ticketType=:ticketType, ticketPrice=:ticketPrice where ticketNo=:ticketNo";
		$ticketInfo = $pdo->prepare($sql);
    $ticketInfo->bindValue(":ticketNo", $_POST["ticketNo"]);
    $ticketInfo->bindValue(":ticketType", $_POST["ticketType"]);
    $ticketInfo->bindValue(":ticketPrice", $_POST["ticketPrice"]);
    
		$ticketInfo->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




