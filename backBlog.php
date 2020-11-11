<?php 
	try {
		require("./connectAqua.php");
		$sql = "select * from blog";
		$blog = $pdo->query($sql);
		$blog->execute();
		
		if($blog -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backBlogRow = $blog->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backBlogRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




