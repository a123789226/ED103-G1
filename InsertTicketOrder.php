<?php
try{
  require_once("connect_aqua.php");

  $sql = "INSERT INTO ticket_order(memNo, ticketOrderDate, ticketTotalPrice)
  VALUES (?, ?, ?);";

  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST['memNo']);
  $member->bindValue(2, $_POST['ticketOrderDate']);
  $member->bindValue(3, $_POST['ticketTotalPrice']);
  $member ->execute();

  echo "Insert Ticket Order Success";
    
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
