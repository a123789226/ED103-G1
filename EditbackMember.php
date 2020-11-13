<?php 
// $_POST["memNo"]=1;
// $_POST["point"]=500;
// $_POST["memStatus"]=0;
	try {
    require("./connectAqua.php");
		$sql = "update member set point=:point, memStatus=:memStatus where memNo=:memNo";
		$member = $pdo->prepare($sql);
    $member->bindValue(":memNo", $_POST["memNo"]);
    $member->bindValue(":point", $_POST["point"]);
    $member->bindValue(":memStatus", $_POST["memStatus"]);
    
		$member->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




