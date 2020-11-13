<?php
try{
  require_once("./connectAqua.php");
  $sql = "update member set memPsw=:password, memEmail=:email, memPhone = :phone, memBirth = :birth where memId=:id";
  // $sql = "select areaNo, sum(nightPerson) as sum from `night_order_list` where nightDate=:nightDate group by areaNo"; 
 
  $member = $pdo->prepare($sql);
  $member->bindValue(":id", $_POST["id"]);
  $member->bindValue(":password", $_POST["password"]);
  $member->bindValue(":email", $_POST["email"]);
  $member->bindValue(":phone", $_POST["phone"]);
  $member->bindValue(":birth", $_POST["birth"]);
  $member->execute();
  
  
  echo "123";

  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

