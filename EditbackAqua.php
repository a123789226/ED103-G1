<?php 
// $_POST["aquaNo"]="16";
// $_POST["aquaName"]="Alexxx";
// $_POST["aquaType"]="turtle";
// $_POST["aquaAge"]="19";
// $_POST["aquaSex"]="M";
// $_POST["arriveDate"]="2020-10-11";
// $_POST["rescueLoc"]="Pacific";
// $_POST["jourStory"]="turtleD is an adult male turtle was found alive but wounded on the hard coral rock bench on Bonaire’s east coast. He was entangled in a mass of fishing line, ship’s ropes and floats. The line was imbedded in the flesh above the turtle’s front flippers.";
// $_POST["recoverStatus"]="1";
// $_POST["releaseDate"]="2020-10-11";
// $_POST["releaseLoc"]="Pacific";
// $_POST["aquaPic"]="image9.jpg";
// $_POST["adoptTotalNum"]="11";
// $_POST["adoptTotalAmt"]="988";
// $_POST["nameStatus"]="1";
// $_POST["nameStart"]="2020-10-13";
// $_POST["nameEnd"]="2020-10-20";
// $_POST["voteStart"]="2020-10-22";
// $_POST["voteEnd"]="2020-10-29";
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
    $aqua->bindValue(":nameEnd", $_POST["nameEnd"]);
    $aqua->bindValue(":voteStart", $_POST["voteStart"]);
    $aqua->bindValue(":voteEnd", $_POST["voteEnd"]);
    
		$aqua->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




