<?php 
try {
	require_once("./connectAqua.php");
  $sql = "select * from aqua where aquaType = 'seal' order by arriveDate DESC";
  $aquatypes = $pdo->prepare($sql);
  $aquatypes->execute();


  if( $aquatypes->rowCount() == 0 ){ //找不到
    //傳回看起來空空的JSON字串
    echo '{}';
  }else{ 
    //取回資料
    $aquatypesRow = $aquatypes->fetchAll(PDO::FETCH_ASSOC);
    // print_r($ticketsRow);
    //送出json字串
    echo json_encode($aquatypesRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>