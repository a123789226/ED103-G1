<?php 
try {
  require_once("./connectAqua.php");
  // 哪些動物符合下列條件：找投票開始時間<=今日<投票結束時間，且命名審核狀態(nomStatus)為1(通過審核)，且通過的名字總數為6個的動物(總數小於6代表管理員少選名字或是根本沒選，總數大於6代表管理員不小心多選，避免意外要先排除)
  // $sql0 = "SELECT a.aquaNo 
  //         FROM aqua a JOIN nominate n ON (a.aquaNo = n.aquaNo) 
  //         WHERE DateDiff(Now(), a.voteStart) >= 0 AND DateDiff(Now(), a.voteEnd) < 0 AND n.nomStatus = 1 
  //         GROUP BY a.aquaNo 
  //         HAVING count(n.aquaNo) = 6;";
  // 上面那段放在子查詢

  $sql = "SELECT a.aquaNo, a.aquaType, a.aquaPic, a.voteEnd, n.nomName
          FROM aqua a JOIN nominate n ON (a.aquaNo = n.aquaNo) 
          WHERE n.nomStatus = 1 AND a.aquaNo IN (SELECT a.aquaNo 
                                                  FROM aqua a JOIN nominate n ON (a.aquaNo = n.aquaNo) 
                                                  WHERE DateDiff(Now(), a.voteStart) >= 0 AND DateDiff(Now(), a.voteEnd) < 0 AND n.nomStatus = 1 
                                                  GROUP BY a.aquaNo 
                                                  HAVING count(n.aquaNo) = 6)
          ORDER BY a.voteEnd, n.aquaNo;"; //一定要排序(最先結束的最前，相同日期就動物編號小的在前)

  $vote = $pdo->query($sql);
  $vote->execute();

  if( $vote->rowCount() == 0 ){ //找不到
    echo '{}';
  }else{ 
    //取回資料
    $voteRow = $vote->fetchAll(PDO::FETCH_ASSOC);
    //送出json字串
    echo json_encode($voteRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>