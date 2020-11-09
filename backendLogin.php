<?php
try {
	require_once("./connectAqua.php");
	
	$sql = "select * from `manager` where mgrId = :mgrId and mgrPsw = :mgrPsw;";
	$manager = $pdo->prepare($sql);
	$manager->bindValue(":mgrId", $_POST["mgrId"]);
	$manager->bindValue(":mgrPsw", $_POST["mgrPsw"]);
	$manager->execute();
// if(isset($_POST["mgrId"])){echo "true";}else{echo "NO";}
if( $manager->rowCount() == 0){
	$manage = "Your account or password is wrong!";
	echo json_encode($manage);

}else{
	 $managerRow = $manager->fetch(PDO::FETCH_ASSOC);
	 session_start();
	 $_SESSION["mgrNo"] = $managerRow["mgrNo"] ;
	 $_SESSION["mgrId"] = $managerRow["mgrId"] ;
	 $_SESSION["mgrPsw"] = $managerRow["mgrPsw"] ;
	 $_SESSION["mgrName"] = $managerRow["mgrName"] ;
	 $_SESSION["mgrStatus"] = $managerRow["mgrStatus"] ;
	
$manage = ["mgrNo" => $_SESSION["mgrNo"] , "mgrId" => $_SESSION["mgrId"] , "mgrPsw" => $_SESSION["mgrPsw"] , "mgrName" => $_SESSION["mgrName"] , "mgrStatus" => $_SESSION["mgrStatus"]];
echo json_encode($manage) ;
}

} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}
?>
