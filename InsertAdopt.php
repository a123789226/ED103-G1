<?php
  session_start();
try{
  require_once("connectAqua.php");

  //新增adopt細項
  $sql = "INSERT INTO adopt(memNo, aquaNo, adoptDate, adoptDollar)
  VALUES (?, ?, now(), ?);";

  $adopt = $pdo->prepare($sql);
  $adopt->bindValue(1, $_SESSION["memNo"]);
  $adopt->bindValue(2, $_POST["aquaNo"]);
  $adopt->bindValue(3, $_POST["adoptDollar"]);
  $adopt ->execute();

  //修改aqua捐款的總金額
  $sql2 = "update `aqua` set adoptTotalAmt = (adoptTotalAmt + :adoptTotalAmt) where aquaNo=:aquaNo"; 
  $updateTotal = $pdo->prepare($sql2);
  $updateTotal->bindValue(":adoptTotalAmt", $_POST["adoptDollar"]);
  $updateTotal->bindValue(":aquaNo", $_POST["aquaNo"]);
  $updateTotal->execute();

  echo '新增成功';
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
