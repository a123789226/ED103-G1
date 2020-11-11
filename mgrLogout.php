<?php 
// 登出
session_start();
unset($_SESSION["mgrNo"]);
unset($_SESSION["mgrName"]);
unset($_SESSION["mgrId"]);
unset($_SESSION["mgrPsw"]);

// session_destroy();
?>
