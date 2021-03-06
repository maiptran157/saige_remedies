<?php
require_once('mysql_connect.php');
$fname = $_POST['firstName'];
$lname = $_POST['lastName'];
$email = $_POST['email'];
$username = $_POST['username'];
// $password = $_POST['password'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$null = null;
$active = 'active';
$stmtUser = $conn->prepare("INSERT INTO user (ID, fname, lname, email, username, status) VALUES (?,?,?,?,?,?)");
$stmtUser->bind_param("ssssss", $null, $fname, $lname, $email, $username, $active);

if(!$stmtUser->execute()){
    echo 'stmtUser failed to execute';
} 

$stmtUser->close();
$query = "SELECT u.ID
          FROM user AS u
          WHERE email = '$email'
          ";
$result = mysqli_query($conn, $query);
if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 0){
        $ID = mysqli_fetch_assoc($result)['ID'];
        $stmtPassword = $conn->prepare("INSERT INTO password (ID, user_id, hash) VALUES (?,?,?)");
        $stmtPassword->bind_param("sss", $null, $ID, $password);
        if(!$stmtPassword->execute()){
            $output['message'] = 'stmtPassword failed to execute';
        } else {$output['message'] = 'You have successfully signed up';
}}}
$stmtPassword->close();
?>