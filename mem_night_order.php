<?php
try{
  require_once("./connectAqua.php");
  $sql = "select o.nightOrderNo, l.nightDate, o.nightTotalPrice, o.nightOrderDate, n.areaType, l.nightPerson, l.nightListPrice, n.areaPrice from member m join night_order o on(m.memNo = o.memNo) join night_order_list l on(o.nightOrderNo = l.nightOrderNo) join night_info n on(l.areaNo = n.areaNo) where m.memId =:id order by o.nightOrderNo;";
 
  $member = $pdo->prepare($sql);
  $member->bindValue(":id", $_POST["id"]);
  $member->execute();
  if($member->rowCount()==0){ // 查無此人_
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $memberRows = $member->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
        $result = array();


        $i = 0;
        foreach($memberRows as $memberRow)
        {
        $result[$i] = array("nightOrderNo"=>$memberRow["nightOrderNo"], "nightDate"=>$memberRow["nightDate"],"nightTotalPrice"=>$memberRow["nightTotalPrice"],"nightOrderDate"=>$memberRow["nightOrderDate"],"areaType"=>$memberRow["areaType"],"nightPerson"=>$memberRow["nightPerson"],"nightListPrice"=>$memberRow["nightListPrice"],"areaPrice"=>$memberRow["areaPrice"]);
            $i++;

      }
            echo  json_encode($result);
  }

  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

