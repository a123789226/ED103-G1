<?php 
try {
	require("./connectAqua.php");
	$sql = "select o.memNo, o.aquaNo, o.msgNo, l.msgReportNo, l.msgReportStatus, l.msgReportReason, l.msgReportDate from journal_message_report l JOIN journal_message o ON o.msgNo = l.msgNo order by l.msgReportNo";


 	$jourRep = $pdo->prepare($sql);
  $jourRep->execute();
  if($jourRep->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $jourRepRows = $jourRep->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
    $result = array();


    $i = 0;
    foreach($jourRepRows as $jourRepRow){
      $result[$i] = array(
        "msgReportNo"=>$jourRepRow["msgReportNo"], 
        "memNo"=>$jourRepRow["memNo"], 
        "aquaNo"=>$jourRepRow["aquaNo"], 
        "msgNo"=>$jourRepRow["msgNo"], 
        "msgReportStatus"=>$jourRepRow["msgReportStatus"], 
        "msgReportReason"=>$jourRepRow["msgReportReason"], 
        "msgReportDate"=>$jourRepRow["msgReportDate"]);

      $i++;

    }

    echo  json_encode($result);

  }
  
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>




