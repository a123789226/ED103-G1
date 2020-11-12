<?php 
// $_POST["keywordsNo"]=1;
// $_POST["keywordsQuestion"]="Hello";
// $_POST["keywordsReply"]="Hello! Welcome to Aqua Wonderland!";
// $_POST["keywords"]="Hello";
	try {
    require("./connectAqua.php");
		$sql = "update chatbot set keywordsQuestion=:keywordsQuestion, keywordsReply=:keywordsReply, keywords=:keywords where keywordsNo=:keywordsNo";
		$member = $pdo->prepare($sql);
    $member->bindValue(":keywordsNo", $_POST["keywordsNo"]);
    $member->bindValue(":keywordsQuestion", $_POST["keywordsQuestion"]);
    $member->bindValue(":keywordsReply", $_POST["keywordsReply"]);
    $member->bindValue(":keywords", $_POST["keywords"]);
    
		$member->execute();
		echo "異動成功";
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




