<?php
try{
  require_once("connectAqua.php");

  $sql = "select * from member where memId=:memId";

  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->execute();

  // 判斷帳號是否有人使用
    if($member->rowCount()!=0){ // 有人使用
      echo "This ID is not available. Choose a different ID.";
    }else{ 
    require_once("connectAqua.php");

    $sql = "INSERT INTO member(memId, memName, memPsw, memPhone, memEmail, memSex, memBirth)
    VALUES ('$memId', '$memName','$memPsw','$memPhone','$memEmail','$memSex','$memBirth');";

    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $memId);
    $member->bindValue(":memName", $memName);
    $member->bindValue(":memPsw", $memPsw);
    $member->bindValue(":memPhone", $memPhone);
    $member->bindValue(":memEmail", $memEmail);
    $member->bindValue(":memSex", $memSex);
    $member->bindValue(":memBirth", $memBirth);
    $member ->execute();
    
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    session_start();

    $_SESSION["memNo"] = $memRow["memNo"];
    $_SESSION["memId"] = $memRow["memId"];
    $_SESSION["memName"] = $memRow["memName"];
    $_SESSION["memPsw"] = $memRow["memPsw"];
    $_SESSION["memEmail"] = $memRow["memEmail"];
    $_SESSION["memPhone"] = $memRow["memPhone"];
    $_SESSION["memSex"] = $memRow["memSex"];
    $_SESSION["memBirth"] = $memRow["memBirth"];
    $_SESSION["point"] = $memRow["point"];
        
    //送出登入者的姓名資料
    $result = array("memNo"=>$memRow["memNo"], 
                    "memId"=>$memRow["memId"],
                    "memName"=>$memRow["memName"],
                    "memPsw"=>$memRow["memPsw"],
                    "memEmail"=>$memRow["memEmail"],
                    "memPhone"=>$memRow["memPhone"],
                    "memSex"=>$memRow["memSex"],
                    "memBirth"=>$memRow["memBirth"],
                    "point"=>$memRow["point"]);

    $json = json_encode($result);
    // 送出登入者的資料
    echo $json;
    echo "Succeed";
    }
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
