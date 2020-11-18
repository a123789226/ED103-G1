<?php
// $_POST["aquaNo"]="1";
// $_POST["jourStory"]="    ";
// $_POST["jourContent"]="fkgldjgpfohj;hkglkh;";
// $_POST["jourPic1"]="images12.jpg";
// $_POST["jourPic2"]="images1111.jpg";
// $_POST["jourPic3"]="images34411.jpg";
// $_POST["jourDate"]="2020-07-22";


if($_POST["jourStory"]==''){
  $jourStory=null;
}else{
  $jourStory=$_POST["jourStory"];
}

try{
  require_once("connectAqua.php");

  $sql = "INSERT INTO journal(aquaNo, jourStory, jourContent, jourPic1, jourPic2, jourPic3, jourDate)
  VALUES (?, ?, ?, ?, ?, ?, ?);";

  $journal = $pdo->prepare($sql);
  $journal->bindValue(1, $_POST['aquaNo']);
  $journal->bindValue(2, $jourStory);
  $journal->bindValue(3, $_POST['jourContent']);
  $journal->bindValue(4, $_POST['jourPic1']);
  $journal->bindValue(5, $_POST['jourPic2']);
  $journal->bindValue(6, $_POST['jourPic3']);
  $journal->bindValue(7, $_POST['jourDate']);

  $journal ->execute();


  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
