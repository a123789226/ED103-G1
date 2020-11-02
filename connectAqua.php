<?php 
$dsn = "mysql:host=127.0.0.1;port=3306;dbname=AquaWonderland;charset=utf8";
$user = "root";
$password = "ji394ANN";
$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
$pdo = new PDO($dsn, $user, $password, $options);
?>
