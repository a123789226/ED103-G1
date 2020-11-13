<?php
try{
  require_once("./connectAqua.php");
  $sql = "select o.ticketOrderNo, o.memNo, o.ticketOrderDate, o.ticketTotalPrice, l.ticketItemNo, l.ticketNo, l.ticketPerson, l.ticketListPrice from ticket_order_list l JOIN ticket_order o ON o.ticketOrderNo = l.ticketOrderNo order by o.ticketOrderNo";
 
  $ticket = $pdo->prepare($sql);
  $ticket->execute();
  if($ticket->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $ticketRows = $ticket->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
    $result = array();


    $i = 0;
    foreach($ticketRows as $ticketRow){
      $result[$i] = array(
        "ticketOrderNo"=>$ticketRow["ticketOrderNo"], 
        "memNo"=>$ticketRow["memNo"], 
        "ticketOrderDate"=>$ticketRow["ticketOrderDate"], 
        "ticketTotalPrice"=>$ticketRow["ticketTotalPrice"], 
        "ticketItemNo"=>$ticketRow["ticketItemNo"], 
        "ticketNo"=>$ticketRow["ticketNo"], 
        "ticketPerson"=>$ticketRow["ticketPerson"], 
        "ticketListPrice"=>$ticketRow["ticketListPrice"]);

      $i++;

    }

    echo  json_encode($result);

  }
  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

