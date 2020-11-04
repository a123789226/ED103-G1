<?php 
try {
	require_once("../connect_aqua.php");
	$sql = "select * from ticket_info";
  $tickets = $pdo->query($sql);
  $prodRows = $tickets->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>ticket Info</title>
<style>
       .ticketButtonBox{
        border-radius: 6px;
        background-color: white;
        height: 60px;
        box-shadow: 0 6px 6px #333333;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 15px;
        }

      .ticketTicketName, .ticketTicketPrice{
        font-size: 20px
        width: 30%;
  
        }

        .ticketButtons{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 120px;
        }
        .ticketButton{
          border: none;
          box-shadow: 0 6px 6px #999;
          cursor: pointer;       
          color: White;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-color: Green;
          font-size: 16px;
          color: white;
          outline: none;
          transition: .05s;
          position: relative;}
          .ticketButton span{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .ticketTicketAmount{
            font-size: 20px;
            color: white;
            padding: 0 10px;
          }

</style>
</head>
<body>

<?php 
foreach($prodRows as $i=>$prodRow){
?>
  <tr>
  	<td><?=$prodRow["ticketType"]?></td>
  	<td><?=$prodRow["ticketPrice"]?></td>
  </tr>
  <div class="ticketButtonBox ticketProduct">
    <input type="hidden" value="<?=$prodRow["ticketType"]?>|<?=$prodRow["ticketPrice"]?>|0">
      <p class="ticketTicketName"><?=$prodRow["ticketType"]?></p>
      <p class="ticketTicketPrice"><span>$</span><span><?=$prodRow["ticketPrice"]?></span></p>
      <div class="ticketButtons">
      <button class="ticketButton"><span>－</span></button>
      <p class="ticketTicketAmount" >0</p>
      <button class="ticketButton"><span>＋</span></button>
      </div>
    </div>
<?php
}
?>   	
</table>
</body>
</html>