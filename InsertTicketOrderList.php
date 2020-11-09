<?php
try{
  require_once("connectAqua.php");
  // 先用ticketType找出票的票種編號
  $sql0 = "SELECT ticketNo From ticket_info WHERE ticketType=:ticketType;";
  $ticket = $pdo->prepare($sql0);
  $ticket->bindValue(":ticketType", $_POST['ticketType']);
  $ticket->execute();
  if($ticket->rowCount()!=0){
    
    $ticketRow = $ticket->fetch(PDO::FETCH_ASSOC);
    $ticketNo = $ticketRow["ticketNo"];
    
    // 再把資料新增成一筆新的訂單明細
    $sql = "INSERT INTO `ticket_order_list`(ticketOrderNo, ticketNo, ticketPerson, ticketListPrice)
      VALUES (:ticketOrderNo, :ticketNo, :ticketPerson, :ticketListPrice)";

    $member = $pdo->prepare($sql);
    $member->bindValue(":ticketOrderNo", $_POST['ticketOrderNo']);
    $member->bindValue(":ticketNo", $ticketNo);
    $member->bindValue(":ticketPerson", $_POST['ticketPerson']);
    $member->bindValue(":ticketListPrice", ($_POST['ticketPrice'] * $_POST['ticketPerson']));
    $member ->execute();

    echo "新增成功";
  }


  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);//{"errorMsg":"......."}
}
?>
