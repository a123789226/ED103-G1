<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from chatbot";
		$chatbot = $pdo->query($sql);
		$chatbot->execute();
		
		if($chatbot -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backChatbotRow = $chatbot->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backChatbotRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




