<?php
try{
  require_once("./connectAqua.php");
  $sql = "select o.ticketOrderNo, o.ticketTotalPrice, o.ticketOrderDate, t.ticketType, t.ticketPrice, l.ticketPerson, l.ticketListPrice from member m join ticket_order o on(m.memNo = o.memNo) join ticket_order_list l on(o.ticketOrderNo = l.ticketOrderNo) join ticket_info t on(l.ticketNo = t.ticketNo) where m.memId =:id order by l.ticketItemNo;";
 
  $member = $pdo->prepare($sql);
  $member->bindValue(":id", $_POST["id"]);
  $member->execute();
  if($member->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $memberRows = $member->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
        $result = array();


        $i = 0;
        foreach($memberRows as $memberRow)
        {
        $result[$i] = array("ticketOrderNo"=>$memberRow["ticketOrderNo"], "ticketTotalPrice"=>$memberRow["ticketTotalPrice"],"ticketOrderDate"=>$memberRow["ticketOrderDate"],"ticketType"=>$memberRow["ticketType"],"ticketPrice"=>$memberRow["ticketPrice"],"ticketPerson"=>$memberRow["ticketPerson"],"ticketListPrice"=>$memberRow["ticketListPrice"]);
            $i++;

      }
            echo  json_encode($result);
  }

  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>

