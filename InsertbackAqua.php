<?php
try{
  require_once("connectAqua.php");
  $pdo->beginTransaction();

  $sql = "INSERT INTO aqua(aquaType, aquaName, aquaAge, aquaSex, arriveDate, rescueLoc, jourStory, recoverStatus, releaseDate, releaseLoc, aquaPic, adoptTotalNum, adoptTotalAmt, nameStatus, nameStart, nameEnd, voteStart, voteEnd)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

  $aqua = $pdo->prepare($sql);
  $aqua->bindValue(1, $_POST['aquaType']);
  $aqua->bindValue(2, $_POST["aquaName"]);
  $aqua->bindValue(3, $_POST['aquaAge']);
  $aqua->bindValue(4, $_POST['aquaSex']);
  $aqua->bindValue(5, $_POST['arriveDate']);
  $aqua->bindValue(6, $_POST['rescueLoc']);
  $aqua->bindValue(7, $_POST["jourStory"]);
  $aqua->bindValue(8, $_POST['recoverStatus']);
  $aqua->bindValue(9, null);
  $aqua->bindValue(10, null);
  $aqua->bindValue(11, $_FILES['upFile']['name'][0]);
  $aqua->bindValue(12, 0);
  $aqua->bindValue(13, 0);
  $aqua->bindValue(14, 0);
  $aqua->bindValue(15, null);
  $aqua->bindValue(16, $_POST["nameEnd"]);
  $aqua->bindValue(17, null);
  $aqua->bindValue(18, $_POST["voteEnd"]);

  $aqua ->execute();
  
  foreach($_FILES["upFile"]["error"] as $i => $error){
    switch($error){  //$error 形同 $_FILES["upFile"]["error"][$]
      case UPLOAD_ERR_OK :
        $dir = "./img/aqua";
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
