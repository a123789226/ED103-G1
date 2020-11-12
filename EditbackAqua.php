<?php 
	try {
    require("./connectAqua.php");
		$sql = "update aqua set aquaType=:aquaType, aquaName=:aquaName, aquaAge=:aquaAge, aquaSex=:aquaSex, arriveDate=:arriveDate, rescueLoc=:rescueLoc, jourStory=:jourStory, recoverStatus=:recoverStatus,releaseDate=:releaseDate, releaseLoc=:releaseLoc, aquaPic=:aquaPic, adoptTotalNum=:adoptTotalNum, adoptTotalAmt=:adoptTotalAmt, nameStatus=:nameStatus, nameStart=:nameStart, nameEnd=:nameEnd, voteStart=:voteStart, voteEnd=:voteEnd where aquaNo=:aquaNo";
		$aqua = $pdo->prepare($sql);
    $aqua->bindValue(":aquaNo", $_POST["aquaNo"]);
    $aqua->bindValue(":aquaType", $_POST["aquaType"]);
    $aqua->bindValue(":aquaName", $_POST["aquaName"]);
    $aqua->bindValue(":aquaAge", $_POST["aquaAge"]);
    $aqua->bindValue(":aquaSex", $_POST["aquaSex"]);
    $aqua->bindValue(":arriveDate", $_POST["arriveDate"]);
    $aqua->bindValue(":rescueLoc", $_POST["rescueLoc"]);
    $aqua->bindValue(":jourStory", $_POST["jourStory"]);
    $aqua->bindValue(":recoverStatus", $_POST["recoverStatus"]);
    $aqua->bindValue(":releaseDate", $_POST["releaseDate"]);
    $aqua->bindValue(":releaseLoc", $_POST["releaseLoc"]);
    $aqua->bindValue(":aquaPic", $_POST["aquaPic"]);
    $aqua->bindValue(":adoptTotalNum", $_POST["adoptTotalNum"]);
    $aqua->bindValue(":adoptTotalAmt", $_POST["adoptTotalAmt"]);
    $aqua->bindValue(":nameStatus", $_POST["nameStatus"]);
    $aqua->bindValue(":nameStart", $_POST["nameStart"]);
    $aqua->bindValue(":nameEnd", $_POST["name"]);
    $aqua->bindValue(":voteStart", $_POST["voteStart"]);
    $aqua->bindValue(":voteEnd", $_POST["voteEnd"]);
    
		$aqua->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




