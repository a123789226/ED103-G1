<?php 

try {
require("connectAqua.php");

$sql = "select b.blogPic, b.blogTitle, m.memName, m.memPic, b.blogTime, b.blogContent1 
from member m 
join blog b on(m.memNo = b.memNo)
order by blogTime
limit 3;";
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
        $result[$i] = array("blogPic"=>$journalRow["blogPic"], "blogTitle"=>$journalRow["blogTitle"],
            "memName"=>$journalRow["memName"], "memPic"=>$journalRow["memPic"],"blogTime"=>$journalRow["blogTime"],"blogContent1"=>$journalRow["blogContent1"]);
            $i++;

      }
            echo  json_encode($result);
  }
} catch (PDOException $e) {  
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);//{"errorMsg":"......."}
}
?>
