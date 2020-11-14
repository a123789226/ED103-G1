<?php
// ob_start();
// // session_start();

if(isset($_SESSION["memId"])){
$errMsg = "";
try{
  require_once("./connectBook.php");
  $sql = "INSERT INTO thankscard ( memNo, memName, memEmail, cardFile, cardStatus,)
          VALUES(?, ?, ?, '', now())"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST['memNo']);
  $member->bindValue(2, $_POST['memName']);
  $member->bindValue(3, $_POST['memEmail']);
  $member ->execute();

  foreach ($_FILES["upFile"]["error"] as $i => $errorCode) {
    //.......確定是否上傳成功
        if( $_FILES["upFile"]["error"][$i] == UPLOAD_ERR_OK){
            //先檢查images資料夾存不存在
            $upload_dir = "../img/thanksCard//";  //檢查資料夾存不存在
            if( file_exists("$upload_dir") === false){
                mkdir("$upload_dir");
            }
            //將檔案copy到要放的路徑
            $fileInfoArr = pathinfo($_FILES["upFile"]["name"][$i]);
            
            $from = $_FILES["upFile"]["tmp_name"][$i];
            $fileLocation[$i] = $to = "img/thanksCard/{$cardNo}_{$i}.{$fileInfoArr["extension"]}";
                if( ($result = copy( $from, $to))===true){
                //將檔案名稱寫回資料庫
            }else{
              echo "-----", $result, "<br>";
                $pdo->rollBack();
              // break;
              exit("新增失敗, $from , to : $to");
            }
        }else{
            echo "錯誤代碼 : {$_FILES["upFile"]["error"][$i]} <br>";
            echo "新增失敗<br>";
        }
    }//foreach
  $sql = "UPDATE thankscard set cardFile = :cardFile WHERE cardNo = $cardNo";
  $products = $pdo->prepare($sql);
  $products -> bindValue(":cardFile", $fileLocation[0]);
  $products -> execute();
  echo $fileLocation[0], "<br>";
  echo "新增成功~";
  // ...
  // ... |
  // $upload_dir = "../img/thanksCard//";  //檢查資料夾存不存在
  // if( ! file_exists($upload_dir )){
  //   mkdir($upload_dir);
  // }
  
  // $imgDataStr = $_POST['hidden_data'];//收到convas.toDataURL()送來的資料
  // $imgDataStr = str_replace('data:image/png;base64,', '', $imgDataStr); //將檔案格式的資訊拿掉
  // $imgDataStr = str_replace(' ', '+', $imgDataStr);
  // $data = base64_decode($imgDataStr);
  
  // //準備好要存的filename
  // $fileName = date("time()");  //或time()
  
  // $file = $upload_dir . $fileName . ".png";
  // $success = file_put_contents($file, $data);
  
  // echo $success ? $file : 'error';



}catch (PDOException $e) {
                // $pdo->rollBack();
                $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
                $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
            }
            echo $errMsg;

}else{
  echo "您尚未登入，請登入後再發文";
}
?>


<!-- 
  $upload_dir = "../img/thanksCard//";  //檢查資料夾存不存在
  
if( ! file_exists($upload_dir )){
    mkdir($upload_dir);
  }
  
  $imgDataStr = $_POST['hidden_data'];//收到convas.toDataURL()送來的資料
  $imgDataStr = str_replace('data:image/png;base64,', '', $imgDataStr); //將檔案格式的資訊拿掉
  $imgDataStr = str_replace(' ', '+', $imgDataStr);
  $data = base64_decode($imgDataStr);
  
  //準備好要存的filename
  $fileName = date("time()");  //或time()
  
  $file = $upload_dir . $fileName . ".png";
  $success = file_put_contents($file, $data);
  
  echo $success ? $file : 'error'; -->