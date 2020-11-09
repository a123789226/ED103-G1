<?php
try{
  require_once("./connectAqua.php");
  $sql = "update `member` set point = :point where memId=:memId"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_GET["memId"]);
  $member->bindValue(":point", $_GET["point"]);
  $member->execute();

  // session_start();
  // $_SESSION["point"] = $_GET["point"];
  echo "Alter points success!";
}catch(PDOException $e){
  	echo "error";
}
?>