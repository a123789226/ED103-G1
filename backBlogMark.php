<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from blog_mark";
		$blogMark = $pdo->query($sql);
		$blogMark->execute();
		
		if($blogMark -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backBlogMarkRow = $blogMark->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backBlogMarkRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




