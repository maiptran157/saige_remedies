<?php

require_once('mysql_connect.php');
$email = addslashes($_POST['email']);

$query = "SELECT * 
          FROM user
          WHERE email = '$email'
";

$result = mysqli_query($conn, $query);
$output = [];

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows < 1){
        $output['message'] = 'New user, sign up valid';
    } else{
        $output['message'] = 'User already exist';
}}

?>