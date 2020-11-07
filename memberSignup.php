<?php
try{
  require_once("connect_aqua.php");

  $sql = "select * from member where memId=:memId";

    $memName = $_POST['memName'];
    $memId = $_POST['memId'];
    $memPsw = $_POST['memPsw'];
    $memPhone = $_POST['memPhone'];
    $memEmail = $_POST['memEmail'];
    $memSex = $_POST['memSex'];
    $memBirth = $_POST['memBirth'];
    $memPic = $_POST['memPic'];




  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $memId);
  $member->execute();

  // 判斷帳號是否有人使用
    if($member->rowCount()!=0){ // 有人使用
      echo "This ID is not available. Choose a different ID.";
    }else{ 
    require_once("connect_aqua.php");

    $sql1 = "INSERT INTO member(memId, memName, memPsw, memPhone, memEmail, memSex, memBirth, memPic)
    VALUES ('$memId', '$memName','$memPsw','$memPhone','$memEmail','$memSex','$memBirth', '$memPic');";

    $member = $pdo->prepare($sql1);
    $member->bindValue(":memId", $memId);
    $member->bindValue(":memName", $memName);
    $member->bindValue(":memPsw", $memPsw);
    $member->bindValue(":memPhone", $memPhone);
    $member->bindValue(":memEmail", $memEmail);
    $member->bindValue(":memSex", $memSex);
    $member->bindValue(":memBirth", $memBirth);
    $member->bindValue(":memPic", $memPic);
    $member ->execute();
    
    session_start();
    $sql = "select * from member where memId=:memId";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $memId);
    $member->execute();
    
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    
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
    // echo $json;
    echo "帳號註冊成功";
    }
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
