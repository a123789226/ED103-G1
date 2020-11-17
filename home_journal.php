<?php 

try {
require("connectAqua.php");

$sql = "select j.aquaNo, j.jourContent, j.jourDate, j.jourStory, j.jourPic1, j.jourPic2, j.jourPic3, a.aquaNo, a.aquaName, a.rescueLoc, a.arriveDate  from journal j join aqua a on(j.aquaNo = a.aquaNo) where a.aquaNo = 1 order by jourDate";
$journal = $pdo->prepare($sql);
$journal->execute();
  
  if($journal->rowCount()==0){ // 查無此人
    echo "{}";
  }else{ // 登入成功
    // 自資料庫中取回資料
    $journalRows = $journal->fetchAll(PDO::FETCH_ASSOC);
    // 將登入會員資料寫入session
        $result = array();


        $i = 0;
        foreach($journalRows as $journalRow)
        {
        $result[$i] = array("aquaNo"=>$journalRow["aquaNo"], "jourStory"=>$journalRow["jourStory"],
            "jourContent"=>$journalRow["jourContent"], "jourPic1"=>$journalRow["jourPic1"],"jourPic2"=>$journalRow["jourPic2"],"jourPic3"=>$journalRow["jourPic3"],"jourDate"=>$journalRow["jourDate"],"aquaName"=>$journalRow["aquaName"],"rescueLoc"=>$journalRow["rescueLoc"],"arriveDate"=>$journalRow["arriveDate"]);
            $i++;

      }
            echo  json_encode($result);
  }
} catch (PDOException $e) {  
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>
