<?php
try{
  require_once("./connectAqua.php");
  $sql = "select o.ticketOrderNo, o.memNo, o.ticketOrderDate, o.ticketTotalPrice, l.ticketItemNo, l.ticketNo, l.ticketPerson, l.ticketListPrice from ticket_order_list l JOIN ticket_order o ON o.ticketOrderNo = l.ticketOrderNo";
 
  $member = $pdo->prepare($sql);
  $member->execute();
  if($member->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $memberRows = $member->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
    $result = array();


    $i = 0;
    foreach($memberRows as $memberRow){
      $result[$i] = array("ticketOrderNo"=>$memberRow["ticketOrderNo"], "memNo"=>$memberRow["memNo"], "ticketOrderDate"=>$memberRow["ticketOrderDate"], "ticketTotalPrice"=>$memberRow["ticketTotalPrice"], "ticketItemNo"=>$memberRow["ticketItemNo"], "ticketNo"=>$memberRow["ticketNo"], "ticketPerson"=>$memberRow["ticketPerson"], "ticketListPrice"=>$memberRow["ticketListPrice"]);

      $i++;

    }

    echo  json_encode($result);

  }
  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

