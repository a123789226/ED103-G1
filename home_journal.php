<?php 

try {
require("connect_aqua.php");

$sql = "select c.aquaNo, c.journalTitle, c.journalContent, c.jourPic1, c.jourPic2, c.jourPic3, editDate from journal j  join journal_content c on (j.aquaNo = c.aquaNo) where j.aquaNo = 1 order by editDate;";
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

        // $aquaNo = $journalRow["aquaNo"];
        // $journalTitle = $journalRow["journalTitle"];
        // $journalContent = $journalRow["journalContent"];
        // $editDate = $journalRow["editDate"];
        // echo "$aquaNo<br>";
        // echo "$journalTitle<br>";
        // echo "$journalContent<br>";
        // echo "$editDate<br>";

        $result[$i] = array("aquaNo"=>$journalRow["aquaNo"], "journalTitle"=>$journalRow["journalTitle"],
            "journalContent"=>$journalRow["journalContent"], "editDate"=>$journalRow["editDate"],);
            $i++;

      }
            echo  json_encode($result);;







    // $result = array("aquaNo"=>$journalRow["aquaNo"],
    //                 "journalTitle"=>$journalRow["journalTitle"],
    //                 "journalContent"=>$journalRow["journalContent"],
    //                 "jourPic1"=>$journalRow["jourPic1"],
    //                 "jourPic2"=>$journalRow["jourPic2"],
    //                 "jourPic3"=>$journalRow["jourPic3"],
    //                 "editDate"=>$journalRow["editDate"]);
    
    // $json = json_encode($result);
    // // 送出登入者的資料
    // echo $json;
  }
} catch (PDOException $e) {  
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>
