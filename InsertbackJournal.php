<?php
try{
  require_once("connectAqua.php");
  $pdo->beginTransaction();

  $sql = "INSERT INTO journal(aquaNo, jourStory, jourContent, jourPic1, jourPic2, jourPic3, jourDate)
  VALUES (?, ?, ?, ?, ?, ?, ?);";

  $journal = $pdo->prepare($sql);
  $journal->bindValue(1, $_POST['aquaNo']);
  $journal->bindValue(2, $_POST['jourStory']);
  $journal->bindValue(3, $_POST['jourContent']);
  $journal->bindValue(4, $_FILES['upFile']['name'][0]);
  $journal->bindValue(5, $_FILES['upFile']['name'][1]);
  $journal->bindValue(6, $_FILES['upFile']['name'][2]);
  $journal->bindValue(7, $_POST['jourDate']);

  $journal ->execute();

  foreach($_FILES["upFile"]["error"] as $i => $error){
    switch($error){  //$error 形同 $_FILES["upFile"]["error"][$]
      case UPLOAD_ERR_OK :
        $dir = "./img/journal";
        //檢查資料夾是否己存在
        if(file_exists($dir)==false){
          mkdir($dir);//make directory
        }
        $from = $_FILES["upFile"]["tmp_name"][$i]; //暫存區中的路徑和檔名
        $fileName = $_FILES["upFile"]["name"][$i];;//原始檔案名稱
        $to = "{$dir}/{$fileName}";
        if(copy($from, $to)){
          // echo "上傳成功<br>";
          header("location:backend.html");
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
  } 
  $pdo->commit();

  } catch (PDOException $e) { 
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}

?>
