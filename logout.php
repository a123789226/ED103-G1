<?php 
// 登出
session_start();
unset($_SESSION["memNo"]);
unset($_SESSION["memName"]);
unset($_SESSION["memId"]);
unset($_SESSION["memPsw"]);
unset($_SESSION["memEmail"]);
unset($_SESSION["memSex"]);
unset($_SESSION["memPhone"]);
unset($_SESSION["memBirth"]);
unset($_SESSION["memPic"]);
unset($_SESSION["memStatus"]);
unset($_SESSION["point"]);

// session_destroy();
?>
