<?php
    session_start();
    $dir = "image";
	$from = $_FILES["bigPhoto"]["tmp_name"]; //暫存區中的路徑和檔名
    $fileName = $_FILES["bigPhoto"]["name"];
	$to = "{$dir}/memPic/{$fileName}";

switch($_FILES["bigPhoto"]["error"]){
	case UPLOAD_ERR_OK :

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

// echo "['error']: " , $_FILES['upFile']['error'] , "<br>";
// echo "['name']: " , $_FILES['upFile']['name'] , "<br>";
// echo "['tmp_name']: " , $_FILES['upFile']['tmp_name'] , "<br>";
// echo "['type']: " , $_FILES['upFile']['type'] , "<br>";
// echo "['size']: " , $_FILES['upFile']['size'] , "<br>";
?>
