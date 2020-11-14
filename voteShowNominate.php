<?php 
try {
  require_once("./connectAqua.php");
  // 備註：這邊用DateDiff(Now(), a.nameEnd) < 0(單位都是日)，代表截止日是到當天就結束惹(非當天23:59才結束)
  $sql = "SELECT a.aquaNo, a.aquaType, a.aquaPic, a.nameEnd, count(n.aquaNo) nominateNum  FROM aqua a LEFT JOIN nominate n ON (a.aquaNo = n.aquaNo) WHERE DateDiff(Now(), a.nameEnd) < 0 GROUP BY aquaNo ORDER BY a.nameEnd, a.aquaNo;";
  $tickets = $pdo->query($sql);
  $tickets->execute();

  if( $tickets->rowCount() == 0 ){ //找不到
    //傳回看起來空空的JSON字串
    echo '{}';
  }else{ 
    //取回資料
    $ticketsRow = $tickets->fetchAll(PDO::FETCH_ASSOC);
    //送出json字串
    echo json_encode($ticketsRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>