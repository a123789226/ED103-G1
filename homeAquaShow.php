<?php
try{
  require_once("./connectAqua.php");
  $sql = "select * from aqua where aquaNo=:aquaNo"; 
 
  $night = $pdo->prepare($sql);
  $night->bindValue(":aquaNo", $_POST["aquaNo"]);
  $night->execute();
  
  if( $night->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料



        // $nightRows = $night->fetch(PDO::FETCH_ASSOC);
        $nightRows = $night->fetch(PDO::FETCH_ASSOC);
        $result = array();


          $result = array("aquaPic"=> $nightRows["aquaPic"], "jourStory"=> $nightRows["jourStory"]);


  	$json = json_encode($result);
    echo $json;

  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

