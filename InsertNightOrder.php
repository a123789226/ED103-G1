<?php
try{
  require_once("connectAqua.php");

  $sql = "INSERT INTO night_order(memNo, nightOrderDate, nightTotalPrice)
  -- OUTPUT Inserted.ticketOrderNo
  VALUES (?, ?, ?);";

  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST['memNo']);
  $member->bindValue(2, $_POST['nightOrderDate']);
  $member->bindValue(3, $_POST['nightTotalPrice']);
  $member ->execute();

  // 取得新增這筆欄位的流水號(nightOrderNo)
  $nightOrderNo = $pdo->lastInsertId();

  echo $nightOrderNo;
    
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
