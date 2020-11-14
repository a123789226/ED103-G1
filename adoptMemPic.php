<?php 
try {
	require_once("./connectAqua.php");
  $sql = "select * from adopt where aquaNo = 'whale' order by arriveDate DESC";
  $aquaAdopter = $pdo->query($sql);
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