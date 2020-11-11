<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from blog_report";
		$blogRep = $pdo->query($sql);
		$blogRep->execute();
		
		if($blogRep -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backBlogRepRow = $blogRep->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backBlogRepRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




