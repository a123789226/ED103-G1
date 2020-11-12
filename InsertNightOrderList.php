<?php
try{
  require_once("connectAqua.php");
  // 先用ticketType找出票的票種編號
  $sql0 = "SELECT areaNo From night_info WHERE areaType=:areaType;";
  $night = $pdo->prepare($sql0);
  $night->bindValue(":areaType", $_POST['nightType']);
  $night->execute();
  if($night->rowCount()!=0){
    
    $nightRow = $night->fetch(PDO::FETCH_ASSOC);
    $areaNo = $nightRow["areaNo"];
    
    // 再把資料新增成一筆新的訂單明細
    $sql = "INSERT INTO `night_order_list`(nightOrderNo, areaNo, nightPerson, nightListPrice, nightDate)
      VALUES (:nightOrderNo, :areaNo, :nightPerson, :nightListPrice, :nightDate)";

    $member = $pdo->prepare($sql);
    $member->bindValue(":nightOrderNo", $_POST['nightOrderNo']);
    $member->bindValue(":areaNo", $areaNo);
    $member->bindValue(":nightPerson", $_POST['nightPerson']);
    $member->bindValue(":nightListPrice", ($_POST['nightPrice'] * $_POST['nightPerson']));
    $member->bindValue(":nightDate", $_POST['nightDate']);
    $member ->execute();

    echo "新增成功";
  }


  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);//{"errorMsg":"......."}
}
?>
