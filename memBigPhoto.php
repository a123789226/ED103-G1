<?php
    session_start();
    $id = $_SESSION["memId"];
    $dir = "image";
	$from = $_FILES["bigPhoto"]["tmp_name"]; //暫存區中的路徑和檔名
    $fileName = $_FILES["bigPhoto"]["name"];
	$to = "{$dir}/memPic/{$id}-{$fileName}";

    $errMsg = "";
try{
            require_once("connectAqua.php");
            $sql = "update member set memPic=:to where memId=:id";
            $photo = $pdo->prepare($sql);
            $photo->bindValue(":to", $to);
            $photo->bindValue(":id", $id);
            $photo->execute();
            
switch($_FILES["bigPhoto"]["error"]){
	case UPLOAD_ERR_OK :
		// $dir = "image";
		//檢查資料夾是否己存在
		// if(file_exists($dir)==false){
		// 	mkdir($dir);//make directory
		// }

		// $from = $_FILES["bigPhoto"]["tmp_name"]; //暫存區中的路徑和檔名
		// $fileName = $_FILES["bigPhoto"]["name"];//原始檔案名稱
		// $to = "{$dir}/memPic/{$id}-{$fileName}";
		if(copy($from, $to)){

            echo "{$to}";
		}else{
			echo "上傳失敗<br>";
		}





		break;
	case UPLOAD_ERR_INI_SIZE :
		echo "上傳的檔案太大, 不得超過", ini_get("upload_max_filesize"), "<br>";
		break;
	case UPLOAD_ERR_FORM_SIZE :
		echo "上傳的檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組<br>";
		break;
	case UPLOAD_ERR_PARTIAL :
		echo "上傳檔案不完整", "<br>";
		break;
	case UPLOAD_ERR_NO_FILE :
		echo "未選檔案", "<br>";
		break;		
	default:
		echo "系統暫時發生問題，請聯絡網站維護人員~~<br>"	;		
}

}catch (PDOException $e) {
                // $pdo->rollBack();
                $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
                $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}


// echo "['error']: " , $_FILES['bigPhoto']['error'] , "<br>";
// echo "['name']: " , $_FILES['bigPhoto']['name'] , "<br>";
// echo "['tmp_name']: " , $_FILES['bigPhoto']['tmp_name'] , "<br>";
// echo "['type']: " , $_FILES['bigPhoto']['type'] , "<br>";
// echo "['size']: " , $_FILES['bigPhoto']['size'] , "<br>";
?>
