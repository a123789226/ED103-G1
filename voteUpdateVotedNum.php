<?php
session_start();
if(isset($_SESSION["memId"]) === true){ //檢查會員有無登入
  try{
    require_once("./connectAqua.php");
    
    if(isset($_COOKIE[$_SESSION["memId"]])){ //有cookie名稱為自己ID，那該ID不能再投票惹
      $result = array("status" => "voted");
      $json = json_encode($result);
      echo $json;
    }else{
      $sql = "UPDATE `nominate` SET VotedNum = VotedNum + 1 WHERE aquaNo=:aquaNo AND nomName=:nomName;"; 
      $updateVotedNum = $pdo->prepare($sql);
      $updateVotedNum->bindValue(":aquaNo", $_POST["aquaNo"]);
      $updateVotedNum->bindValue(":nomName", $_POST["nomName"]);
      $updateVotedNum->execute();
      
      //投票成功，將會員Id寫進cookie，名稱=會員的ID，值叫voted，24小時候刪除
      setcookie($_SESSION["memId"], 'voted', time()+3600*24);
    
      //要再把該動物的六個名字跟票數取出
      $sql2 ="SELECT nomName, votedNum FROM nominate WHERE aquaNo=:aquaNo AND nomStatus = 1";
      $getCount = $pdo->prepare($sql2);
      $getCount->bindValue(":aquaNo", $_POST["aquaNo"]);
      $getCount->execute();

      $getCountRow = $getCount->fetchAll(PDO::FETCH_ASSOC);

      $json = json_encode($getCountRow);
      echo $json;
    }

  }catch(PDOException $e){
      echo "error";
  }
}else{
  echo "{}";
}

?>