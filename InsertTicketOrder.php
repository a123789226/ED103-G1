<?php
try{
  require_once("connectAqua.php");

  $sql = "INSERT INTO ticket_order(memNo, ticketOrderDate, ticketTotalPrice)
  -- OUTPUT Inserted.ticketOrderNo
  VALUES (?, ?, ?);";

  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST['memNo']);
  $member->bindValue(2, $_POST['ticketOrderDate']);
  $member->bindValue(3, $_POST['ticketTotalPrice']);
  $member ->execute();

  // 取得新增這筆欄位的流水號(定義為ticketOrderNo)
  $ticketOrderNo = $pdo->lastInsertId();

  echo $ticketOrderNo;
    
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
