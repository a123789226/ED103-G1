<?php
  session_start();

  if(isset($_SESSION["memId"]) === true){ //有登入會員
    try{
      require_once("connectAqua.php");
      // 先判斷會員有沒有替這隻動物提名過
      $sql = "SELECT * FROM nominate WHERE memNo=:memNo AND aquaNo=:aquaNo;";
      $checkNominate = $pdo->prepare($sql);
      $checkNominate->bindValue(":memNo", $_SESSION["memNo"]);
      $checkNominate->bindValue(":aquaNo", $_POST['aquaNo']);
      $checkNominate->execute();

      if($checkNominate->rowCount()==0){  //  並未替這隻動物命名過
        // 再來確認這個名字有沒有被提名過
        $sql2 = "SELECT * FROM nominate WHERE aquaNo=:aquaNo AND nomName=:nomName;";
        $checkNominateRepeat = $pdo->prepare($sql2);
        $checkNominateRepeat->bindValue(":nomName", $_POST['nomName']);
        $checkNominateRepeat->bindValue(":aquaNo", $_POST['aquaNo']);
        $checkNominateRepeat->execute();

        if($checkNominateRepeat->rowCount()==0){ //這個名字沒有重複過

          $sql3 = "INSERT INTO nominate(memNo, aquaNo, nomName, nomStatus)
          VALUES (?, ?, ?, 0);";
        
          $nominate = $pdo->prepare($sql3);
          $nominate->bindValue(1, $_SESSION["memNo"]);
          $nominate->bindValue(2, $_POST['aquaNo']);
          $nominate->bindValue(3, $_POST['nomName']);
          $nominate->execute();
          
          // $name = $pdo->lastInsertId();
          $result = array("status" => "succeed");
          $json = json_encode($result);
          echo $json;

        }else{  //這個名字已經有人取過惹
          $result = array("status" => "repeated",
                          "name" => $_POST['nomName']);
          $json = json_encode($result);
          echo $json;
        }

      }else{   //已經替這隻動物提名過
        $result = array("status" => "hasNamed");
        $json = json_encode($result);
        echo $json;
      }

    } catch (PDOException $e) {  
        $error = array("errorMsg"=>$e->getMessage());
        echo json_encode($error);//{"errorMsg":"......."}
    }
  }else{
    echo "{}";
  }
?>
