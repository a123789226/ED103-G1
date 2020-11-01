<?php
    $dbname='ed103g1';
    $dsn= "mysql:host=127.0.0.1;port=3306;dbname=$dbname;charset=utf8";
    $user= "ed103g1";
    $password= "ed103g1";
    $options= array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo= new PDO($dsn, $user, $password, $options);
?> 