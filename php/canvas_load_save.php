<?php

 $_SESSION["memId"]='Mark123';
// $_SESSION["memNo"]='1';
require_once("./connectBook.php");
try{
$sql = "INSERT INTO thankscard ( memNo, memName, memEmail, cardFile, cardStatus,)
        VALUES('{$_SESSION["memNo"]}', '2', '3', ?, now())"; 
  $member = $pdo->prepare($sql);
  // $member->bindValue(1, $_POST['memNo']);
  // $member->bindValue(2, $_POST['memName']);
  // $member->bindValue(3, $_POST['memEmail']);
  // $products -> execute();

  //取得自動創號的key值
  $cardNo = $pdo->lastInsertId();
  
    $upload_dir = "../img/thanksCard//";  //檢查資料夾存不存在
    if( ! file_exists($upload_dir )){
    mkdir($upload_dir);
      }

  $imgDataStr = $_POST['hidden_data'];//收到convas.toDataURL()送來的資料
  $imgDataStr = str_replace('data:image/png;base64,', '', $imgDataStr); //將檔案格式的資訊拿掉
  $imgDataStr = str_replace(' ', '+', $imgDataStr);
  $data = base64_decode($imgDataStr);

  //準備好要存的filename
  $fileName = date("{$cardNo}_1.{$file["extension"]}");  //或time()
  
  $file = $upload_dir . $fileName . ".png";
  $success = file_put_contents($file, $data);
  
  echo $success ? $file : 'error'; 
}catch (PDOException $e) {  
  $error = array("errorMsg"=>$e->getMessage());
  echo json_encode($error);//{"errorMsg":"......."}
}
  ?>