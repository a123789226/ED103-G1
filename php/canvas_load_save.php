<?php
ini_set('display_errors', 1);
// ob_start();
session_start();
$memName = $_SESSION["memName"];
$memNo = $_SESSION["memNo"];
$memEmail = $_SESSION["memEmail"];
// if(isset($_SESSION["memId"])){
//   $errMsg = "";
try{
require_once("../connectAqua.php");
$sql = "INSERT INTO thankscard ( memNo, cardName, memEmail, cardFile, cardStatus, cardDate)
        VALUES('$memNo', '$memName', '$memEmail', '', '1', now())"; 
        // $sql = "INSERT INTO thankscard ( memNo, memEmail, cardFile, cardStatus)
        // VALUES('$memNo', '$memEmail', '', '1')"; 
  $member = $pdo->prepare($sql);
  // $member->bindValue(1, $_POST['memNo']);
  // $member->bindValue(2, $_POST['memName']);
  // $member->bindValue(3, $_POST['memEmail']);
  $member -> execute();

  //取得自動創號的key值
  $cardNo = $pdo->lastInsertId();
  
    $upload_dir = "../img/thanksCard/";  //檢查資料夾存不存在
    if( ! file_exists($upload_dir)){
    mkdir($upload_dir);
      }

      $imgDataStr = $_POST['hidden_data'];//收到convas.toDataURL()送來的資料
      $imgDataStr = str_replace('data:image/png;base64,', '', $imgDataStr); //將檔案格式的資訊拿掉
      $imgDataStr = str_replace(' ', '+', $imgDataStr);
      $data = base64_decode($imgDataStr);

  //準備好要存的filename
  $fileName = "{$cardNo}_1";  //或time()
  
  $file = $upload_dir . $fileName . ".png";
  $success = file_put_contents($file, $data);
  
  $sql = "update thankscard set cardFile = '$file' where cardNo = $cardNo"; 
  $member = $pdo->prepare($sql);
  $member -> execute();




  echo $success ? $file : 'error'; 
}catch (PDOException $e) {  
  $error = array("errorMsg"=>$e->getMessage());
  echo json_encode($error);//{"errorMsg":"......."}
}
  ?>