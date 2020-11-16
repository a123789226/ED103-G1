<?php
// $_POST["aquaNo"]="8";
// $_POST["jourStory"]="    ";
// $_POST["jourContent"]="A was found stranded on a beach, she is extremely underweight on Aberthaw Beach. She  was admitted to the hospital, sexed, weighed and measured. Her body temperature and a blood sample were taken as well. She was then given fluids and she was placed under a heat lamp for comfort.";
// $_POST["jourPic1"]="images11.jpg";
// $_POST["jourPic2"]="images11.jpg";
// $_POST["jourPic3"]="images11.jpg";
// $_POST["jourDate"]="2020-07-02";


if($_POST["jourStory"]==''){
  $jourStory=null;
}else{
  $jourStory=$_POST["jourStory"];
}

try{
  require_once("connectAqua.php");

  $sql = "INSERT INTO journal(aquaNo, jourStory, jourContent, jourPic1, jourPic2, jourPic3, jourDate)
  VALUES (?, ?, ?, ?, ?, ?, ?);";

  $journal = $pdo->prepare($sql);
  $journal->bindValue(1, $_POST['aquaNo']);
  $journal->bindValue(2, $jourStory);
  $journal->bindValue(3, $_POST['jourContent']);
  $journal->bindValue(4, $_POST['jourPic1']);
  $journal->bindValue(5, $_POST['jourPic2']);
  $journal->bindValue(6, $_POST['jourPic3']);
  $journal->bindValue(7, $_POST['jourDate']);

  $journal ->execute();

  foreach ($_FILES["upFile"]["error"] as $i => $errorCode) {
  //.......確定是否上傳成功
    if( $_FILES["upFile"]["error"][$i] == UPLOAD_ERR_OK){
        //先檢查images資料夾存不存在
        if( file_exists("img") === false){
            mkdir("img");
        }
        //將檔案copy到要放的路徑
        // $fileInfoArr = pathinfo($_FILES["upFile"]["name"][$i]);
        // $fileName = "{$piNo}_{$i}.{$fileInfoArr["extension"]}";  //8.gif
        $fileName = "{$_FILES['upFile']['name'][$i]}";
        $from = $_FILES["upFile"]["tmp_name"][$i];
        $to = "img/backAddJour/$fileName";
            if(copy( $from, $to)===true){
            //將檔案名稱寫回資料庫
            // update postinfo set piTitlePic='11.jpg', piFloatLeftPic='12.jpg', piFloatRightPic='13.jpg' where piNo = 1;
            // $sql = "update postinfo set piTitlePic = :piTitlePic where piNo = $piNo";
        }else{
            // $pdo->rollBack();
        }
    }else{
        echo "錯誤代碼 : {$_FILES["upFile"]["error"][$i]} <br>";
        echo "新增失敗<br>";
    }
  }//foreach
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
