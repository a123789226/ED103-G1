<?php 
try {
	require_once("./connectAqua.php");
  $sql = "select * from ticket_info";
  $tickets = $pdo->query($sql);
  $tickets->execute();


  if( $tickets->rowCount() == 0 ){ //找不到
    //傳回看起來空空的JSON字串
    echo '{}';
  }else{ 
    //取回資料
    $ticketsRow = $tickets->fetchAll(PDO::FETCH_ASSOC);
    // print_r($ticketsRow);
    //送出json字串
    echo json_encode($ticketsRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>