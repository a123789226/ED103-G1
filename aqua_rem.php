<?php
try{
  require_once("./connect_aqua.php");
  $sql = "select i.areaNo areaNo,ifnull((o.nightPerson),0) sum , i.areaCapacity i from night_info i left JOIN night_order_list o ON( o.areaNo = i.areaNo and o.nightDate =:nightDate) group by areaNo";
  // $sql = "select areaNo, sum(nightPerson) as sum from `night_order_list` where nightDate=:nightDate group by areaNo"; 
 
  $night = $pdo->prepare($sql);
  $night->bindValue(":nightDate", $_POST["nightDate"]);
  $night->execute();
  
  if( $night->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料



        $nightRows = $night->fetchAll(PDO::FETCH_ASSOC);
        // $nightRows1 = $night->fetch(PDO::FETCH_ASSOC);
        $result = array();
        foreach($nightRows as $nightRow)
        {

        $areaNo = $nightRow["areaNo"];
        $orderPerson = (int)$nightRow["sum"];
        $capacity = $nightRow["i"];
        // echo "$areaNo<br>";
        // echo "$orderPerson<br>";
        // echo "$capacity<br>";
        if(count($result) == 0){
          $result = array("area${areaNo}Capacity"=> $capacity, "area${areaNo}Order"=> $orderPerson);
          // $result = array("area$areaNo"=> $areaNo, "orderPerson$areaNo"=> $orderPerson);
        }else{
          $result["area${areaNo}Capacity"] = $capacity;
          $result["area${areaNo}Order"] = $orderPerson;


        }

      }

  	$json = json_encode($result);
    echo $json;

  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

