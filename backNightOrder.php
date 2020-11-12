<?php
try{
  require_once("./connectAqua.php");
  $sql = "select o.nightOrderNo, o.memNo, o.nightOrderDate, o.nightTotalPrice, l.nightItemNo, l.areaNo, l.nightPerson, l.nightListPrice, l.nightDate from night_order_list l JOIN night_order o ON o.nightOrderNo = l.nightOrderNo";
 
  $night = $pdo->prepare($sql);
  $night->execute();
  if($night->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $nightRows = $night->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
    $result = array();


    $i = 0;
    foreach($nightRows as $nightRow){
      $result[$i] = array(
        "nightOrderNo"=>$nightRow["nightOrderNo"], 
        "memNo"=>$nightRow["memNo"], 
        "nightOrderDate"=>$nightRow["nightOrderDate"], 
        "nightTotalPrice"=>$nightRow["nightTotalPrice"], 
        "nightItemNo"=>$nightRow["nightItemNo"], 
        "areaNo"=>$nightRow["areaNo"], 
        "nightPerson"=>$nightRow["nightPerson"], 
        "nightListPrice"=>$nightRow["nightListPrice"],
        "nightDate"=>$nightRow["nightDate"]);

      $i++;

    }

    echo  json_encode($result);

  }
  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

