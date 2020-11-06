<?php
try{
  require_once("./connectBooks.php");
  $sql = "update `member` set point = :point where memId=:memId"; 
  $member = $pdo->prepare($sql);
    // tour.html的463行是用get 抓資料
  $member->bindValue(":memId", $_GET["memId"]);
  $member->bindValue(":point", $_GET["point"]);
  $member->execute();
}catch(PDOException $e){

  	echo "error";
}
?>