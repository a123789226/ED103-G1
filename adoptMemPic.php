<?php 
try {
	require_once("./connectAqua.php");
  $sql = "select m.memPic from adopt a join member m on (a.memNo = m.memNo) where a.aquaNo =:aquaNo";
  $aquaAdopter = $pdo->prepare($sql);
  $aquaAdopter-> bindValue(':aquaNo',$_POST['aquaNo']);
  $aquaAdopter->execute();


  if( $aquaAdopter->rowCount() == 0 ){ //找不到
    //傳回看起來空空的JSON字串
    echo '{}';
  }else{ 
    //取回資料
    $aquaAdopterRow = $aquaAdopter->fetchAll(PDO::FETCH_ASSOC);
    // print_r($ticketsRow);
    //送出json字串
    echo json_encode($aquaAdopterRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>