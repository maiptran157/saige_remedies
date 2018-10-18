<?php

session_start();
Ob_start();

require_once('mysql_connect.php');

$username = $_POST['email'];
$pass = $_POST['password'];

// Weak form of hashing $_POST['pass'] = sha1($_POST['pass']);

$query = "SELECT u.ID AS _id, u.fname, u.lname, u.email, u.username, u.status
          FROM user AS u
          JOIN password AS p
            ON u.ID = p.user_id
          WHERE u.username = '$username'
            AND p.hash = '$pass'
            AND u.status = 'active'
            ";

$result = mysqli_query($conn, $query);

$output = new stdClass;

$output->success = false;
$output->loggedin = false;

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 0){
        
        $row = mysqli_fetch_assoc($result);
        
        print_r($row);
        
        $_SESSION['userData'] = $row;
        
        print_r($_SESSION['userData']);//testest

        $output->success = true;
        $output->loggedin = true;
        $output->userData = $_SESSION['userData'];
        $output->message = 'Logged In';
        print('User logged in');
    } else{
        print('Data invalid');
        $output->message = 'Invalid email and/or password';
    }
} else{
    print('Query failed');
    $output->message = 'Server Error';
}

// $messages = ob_get_contents();
ob_end_clean();
// $output->message = $messages;
// print(json_encode($output));
// print('Check here:');
?>