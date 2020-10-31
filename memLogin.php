<?php 
try {
	require("connectAqua.php");
	
	$sql = "select * from `member` where memId=:memId and memPsw=:memPsw";
	$member = $pdo->prepare($sql);
	$member->bindValue(":memId", $_POST["memId"]);
	$member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();
    
    // if($member->rowCount()==0){
    //     echo "notFound";
    // }else{
    //     $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //     session_start();
    //     $_SESSION["memNo"] = $memRow["memNo"];
    //     $_SESSION["memId"] = $memRow["memId"];
    //     $_SESSION["memName"] = $memRow["memName"];

    //     $member= ["memNo"=>$_SESSION["memNo"],"memId"=>$_SESSION["memId"],"memName"=>$_SESSION["memName"],"memPsw"=>$_SESSION["memPsw"],"memPic"=>$_SESSION["memPic"],"memPoint"=>$_SESSION["memPoint"],"memStatus"=>$_SESSION["memStatus"]];
    //     echo json_encode($member);
    // }
} catch (PDOException $e) {  
    echo "錯誤行號 : ".$e -> getLine(). "<br>";
    echo "錯誤原因 : ".$e -> getMessage(). "<br>";
    echo "系統無法連線<br>";
      
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
</head>
<body>
<?php 
if($errMsg !=""){
	echo "<div>$errMsg</div>";
}elseif($member->rowCount() == 0){
	echo "<center>帳密錯誤~</center>";
}else{
	//取回登入者資料
	$memRow = $member->fetch(PDO::FETCH_ASSOC);
	echo $memRow["memName"], ",恭喜成功😭<br>";
}
?>	
    
</body>
</html>
