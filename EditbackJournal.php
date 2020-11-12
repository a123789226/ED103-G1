<?php 
// $_POST["jourNo"]="1";
// $_POST["aquaNo"]="2";
// $_POST["jourStory"]="A was found  straned and rescued near North Bay, and found to have two marks, one likely the result of a shark attack that had healed and the other a tumor, but it was in a more stable condition than she was found.";
// $_POST["jourContent"]="A was found stranded on a beach, she is extremely underweight on Aberthaw Beach. She  was admitted to the hospital, sexed, weighed and measured. Her body temperature and a blood sample were taken as well. She was then given fluids and she was placed under a heat lamp for comfort.";
// $_POST["jourPic1"]="images11.jpg";
// $_POST["jourPic2"]="images11.jpg";
// $_POST["jourPic3"]="images11.jpg";
// $_POST["jourDate"]="2020-07-02";
	try {
    require("./connectAqua.php");
		$sql = "update journal set  aquaNo=:aquaNo, jourStory=:jourStory,jourContent=:jourContent, jourPic1=:jourPic1, jourPic2=:jourPic2, jourPic3=:jourPic3, jourDate=:jourDate where jourNo=:jourNo";
		$aqua = $pdo->prepare($sql);
    $aqua->bindValue(":jourNo", $_POST["jourNo"]);
    $aqua->bindValue(":aquaNo", $_POST["aquaNo"]);
    $aqua->bindValue(":jourStory", $_POST["jourStory"]);
    $aqua->bindValue(":jourContent", $_POST["jourContent"]);
    $aqua->bindValue(":jourPic1", $_POST["jourPic1"]);
    $aqua->bindValue(":jourPic2", $_POST["jourPic2"]);
    $aqua->bindValue(":jourPic3", $_POST["jourPic3"]);
    $aqua->bindValue(":jourDate", $_POST["jourDate"]);
    
		$aqua->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




