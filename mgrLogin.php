<?php 
try {
  require("connectAqua.php");

  $sql = "select * from `manager` where mgrId=:mgrId and mgrPsw=:mgrPsw;";
  
  $manager = $pdo->prepare($sql);
  $manager->bindValue(":mgrId", $_POST["mgrId"]);
  $manager->bindValue(":mgrPsw", $_POST["mgrPsw"]);
  $manager->execute();
    
    if($manager->rowCount()==0){ // 查無此人
      echo "{}";
    }else{ // 登入成功
      // 自資料庫中取回資料
      $mgrRow = $manager->fetch(PDO::FETCH_ASSOC);
      // 將登入管理員資料寫入session
      session_start();
      $_SESSION["mgrNo"] = $mgrRow["mgrNo"];
      $_SESSION["mgrName"] = $mgrRow["mgrName"];
      $_SESSION["mgrId"] = $mgrRow["mgrId"];
      $_SESSION["mgrPsw"] = $mgrRow["mgrPsw"];
      $_SESSION["mgrStatus"] = $mgrRow["mgrStatus"];

      $result = array("mgrNo"=>$mgrRow["mgrNo"],
                      "mgrName"=>$mgrRow["mgrName"],
                      "mgrId"=>$mgrRow["mgrId"],
                      "mgrPsw"=>$mgrRow["mgrPsw"],
                      "mgrStatus"=>$mgrRow["mgrStatus"]);
      
      $json = json_encode($result);
      // 送出登入者的資料
      echo $json;
    }
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
