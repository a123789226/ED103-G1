<?php 
	try {
		require("./connectAqua.php");
		$sql = "INSERT INTO member (memNo, memName, memId, memPsw, memEmail, memSex, memPhone, memBirth, memPic) VALUES (null, :memName, :memId, :memPsw, :memEmail, :memSex, :memPhone, memBirth, memPic";
		$member = $pdo->query($sql);
		$member->execute();
		
		if($member -> rowCount() == 0 ){ // 查無此人
			echo "{}";
		}else{ // 登入成功
			$backMemerRow = $member->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($backMemerRow);
			echo $json;
		}
	}catch(PDOException $e){  
		echo $e->getMessage();
	}
?>




