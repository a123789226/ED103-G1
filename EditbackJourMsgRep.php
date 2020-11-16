<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update journal_message_report set msgReportStatus=:msgReportStatus where msgReportNo=:msgReportNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":msgReportNo", $_POST["msgReportNo"]);
    $jourMsg->bindValue(":msgReportStatus", $_POST["msgReportStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




