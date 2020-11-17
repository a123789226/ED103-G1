<?php 
try {
  // $_POST["aquaNo"]="1";

	require_once("./connectAqua.php");
  $sql = "select aquaNo, aquaPic from aqua where aquaNo =:aquaNo;";
  $aquaNo = $pdo->prepare($sql);
  $aquaNo-> bindValue(':aquaNo',$_POST['aquaNo']);
  $aquaNo->execute();


  if( $aquaNo->rowCount() == 0 ){ //找不到
    //傳回看起來空空的JSON字串
    echo '{}';
  }else{ 
    //取回資料
    $aquaNoRow = $aquaNo->fetch(PDO::FETCH_ASSOC);
    // print_r($ticketsRow);
    //送出json字串
    echo json_encode($aquaNoRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>