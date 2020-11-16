<?php 
// $_POST["msgNo"]=1;
// $_POST["msgStatus"]="正常";
	try {
    require("./connectAqua.php");
		$sql = "update blog_report set blogReportStatus=:blogReportStatus where blogReportNo=:blogReportNo";
		$jourMsg = $pdo->prepare($sql);
    $jourMsg->bindValue(":blogReportNo", $_POST["blogReportNo"]);
    $jourMsg->bindValue(":blogReportStatus", $_POST["blogReportStatus"]);
    
		$jourMsg->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




