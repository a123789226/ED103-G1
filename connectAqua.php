<?php 
// SQ專用
$dsn = "mysql:host=localhost;port=3306;dbname=ed103g1;charset=utf8";
$user = "ed103g1";
$password = "ed103g1";
$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
$pdo = new PDO($dsn, $user, $password, $options);
?>
