<?php 
// 登出
session_start();
unset($_SESSION["memNo"]);
unset($_SESSION["memId"]);
unset($_SESSION["memName"]);
unset($_SESSION["memEmail"]);
unset($_SESSION["memPhone"]);
unset($_SESSION["memSex"]);

// session_destroy();
?>
