<?php
$_POST["aquaType"]="turtle";
$_POST["aquaAge"]="19";
$_POST["aquaSex"]="M";
$_POST["arriveDate"]="2020-10-11";
$_POST["rescueLoc"]="Pacific";
$_POST["jourStory"]="turtleD is an adult male turtle was found alive but wounded on the hard coral rock bench on Bonaire’s east coast. He was entangled in a mass of fishing line, ship’s ropes and floats. The line was imbedded in the flesh above the turtle’s front flippers.";
$_POST["recoverStatus"]="1";
$_POST["releaseDate"]="2020-10-11";
$_POST["releaseLoc"]="Pacific";
$_POST["aquaPic"]="image9.jpg";
$_POST["nameStatus"]="提名中";

if($_POST["aquaName"]==''){
  $aquaName=null;
}else{
  $aquaName=$_POST["aquaName"];
}

if($_POST["jourStory"]==''){
  $jourStory=null;
}else{
  $jourStory=$_POST["jourStory"];
}

if($_POST["releaseDate"]==''){
  $releaseDate=null;
}else{
  $releaseDate=$_POST["releaseDate"];
}

if($_POST["releaseLoc"]==''){
  $releaseLoc=null;
}else{
  $releaseLoc=$_POST["releaseLoc"];
}

if($_POST["adoptTotalNum"]==''){
  $adoptTotalNum=null;
}else{
  $adoptTotalNum=$_POST["adoptTotalNum"];
}

if($_POST["adoptTotalAmt"]==''){
  $adoptTotalAmt=null;
}else{
  $adoptTotalAmt=$_POST["adoptTotalAmt"];
}

if($_POST["nameStart"]==''){
  $nameStart=null;
}else{
  $nameStart=$_POST["nameStart"];
}

if($_POST["nameEnd"]==''){
  $nameEnd=null;
}else{
  $nameEnd=$_POST["nameEnd"];
}

if($_POST["voteStart"]==''){
  $voteStart=null;
}else{
  $voteStart=$_POST["voteStart"];
}

if($_POST["voteEnd"]==''){
  $voteEnd=null;
}else{
  $voteEnd=$_POST["voteEnd"];
}



try{
  require_once("connectAqua.php");

  $sql = "INSERT INTO journal(aquaType, aquaName, aquaAge, aquaSex, arriveDate, rescueLoc, jourStory, recoverStatus, releaseDate, releaseLoc, aquaPic, adoptTotalNum, adoptTotalAmt, nameStatus, nameStart, nameEnd, voteStart, voteEnd)
  VALUES (?, ?, ?, ?, ?, ?, ?);";

  $aqua = $pdo->prepare($sql);
  $aqua->bindValue(1, $_POST['aquaType']);
  $aqua->bindValue(2, $aquaName);
  $aqua->bindValue(3, $_POST['aquaAge']);
  $aqua->bindValue(4, $_POST['aquaSex']);
  $aqua->bindValue(5, $_POST['arriveDate']);
  $aqua->bindValue(6, $_POST['rescueLoc']);
  $aqua->bindValue(7, $jourStory);
  $aqua->bindValue(8, $_POST['recoverStatus']);
  $aqua->bindValue(9, $releaseDate);
  $aqua->bindValue(10, $releaseLoc);
  $aqua->bindValue(11, $_POST['aquaPic']);
  $aqua->bindValue(12, $adoptTotalNum);
  $aqua->bindValue(13, $adoptTotalAmt);
  $aqua->bindValue(14, $_POST['nameStatus']);
  $aqua->bindValue(15, $nameStart);
  $aqua->bindValue(16, $nameEnd);
  $aqua->bindValue(17, $voteStart);
  $aqua->bindValue(18, $voteEnd);

  $aqua ->execute();
  echo "異動成功";
    
  } catch (PDOException $e) {  
    $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);//{"errorMsg":"......."}
}
?>
