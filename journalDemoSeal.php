<?php 

try {
require("./connectAqua.php");

$sql = "select * 
from journal j 
join aqua a on(a.aquaNo = j.aquaNo) 
where j.aquaNo = (select max(a.aquaNo) from journal j join aqua a where a.aquaType = 'Seal')
order by jourNo desc;
";
$journal = $pdo->prepare($sql);
// $journal-> bindValue(':aquaNo',$_POST['aquaNo']);
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
        $result[$i] = array("jourNo"=>$journalRow["jourNo"],"aquaNo"=>$journalRow["aquaNo"], "jourStory"=>$journalRow["jourStory"],
            "jourContent"=>$journalRow["jourContent"], "jourPic1"=>$journalRow["jourPic1"],"jourPic2"=>$journalRow["jourPic2"],"jourPic3"=>$journalRow["jourPic3"],"jourDate"=>$journalRow["jourDate"],"rescueLoc"=>$journalRow["rescueLoc"],"arriveDate"=>$journalRow["arriveDate"],"aquaName"=>$journalRow["aquaName"],"aquaPic"=>$journalRow["aquaPic"]);
            $i++;

      }
            echo  json_encode($result);
  }
} catch (PDOException $e) {  
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>
