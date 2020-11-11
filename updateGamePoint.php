<?php
// try{
//   require_once("./connectBooks.php");
//   $sql = "update `member` set point = :point where memId=:memId"; 
//   $member = $pdo->prepare($sql);
//   $member->bindValue(":memId", $_GET["memId"]);
//   $member->bindValue(":point", $_GET["point"]);
//   $member->execute();
// }catch(PDOException $e){

//   	echo "error";
// }
// document.querySelector(".winNum").innerHTML = winNum;

try{
  require_once("./connectAqua.php");
  $sql = "update `member` set point = :point where memId=:memId"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_GET["memId"]);
  $member->bindValue(":point", $_GET["point"]);
  $member->execute();
}catch(PDOException $e){

  	echo "error";
}




?>
