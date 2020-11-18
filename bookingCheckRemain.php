<?php
try{
  // $_GET["nightDate"] = '2020-11-19';
  require_once("./connectAqua.php");
  // $sql = "SELECT i.areaNo areaNo, IFNULL(sum(o.nightPerson), 0) orderPerson , i.areaCapacity capacity 
  //           FROM night_info i LEFT JOIN night_order_list o ON( o.areaNo = i.areaNo AND o.nightDate =:nightDate)
  //           WHERE i.areaNo = (SELECT areaNo FROM night_info WHERE areaType =:areaType)
  //           GROUP BY areaNo;";
  $sql = "SELECT i.areaType areaType, IFNULL(sum(o.nightPerson), 0) orderPerson , i.areaCapacity capacity 
            FROM night_info i LEFT JOIN night_order_list o ON( o.areaNo = i.areaNo AND o.nightDate =:nightDate)
            GROUP BY areaType ORDER BY i.areaNo;";
 
  $night = $pdo->prepare($sql);
  $night->bindValue(":nightDate", $_GET["nightDate"]);
  // $night->bindValue(":areaType", $_GET["areaType"]);
  $night->execute();
  
  if( $night->rowCount()==0){
	  echo "{}";
  }else{ 
    $nightRows = $night->fetchAll(PDO::FETCH_ASSOC);
    // print_r($nightRows);
  	$json = json_encode($nightRows);
    echo $json;

  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

