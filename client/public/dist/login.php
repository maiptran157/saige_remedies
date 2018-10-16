<?php

session_start();
Ob_start();

require_once('mysql_connect.php');

// Weak form of hashing $_POST['pass'] = sha1($_POST['pass']);

$query = "SELECT u.ID AS _id, u.fname, u.lname, u.email, u.username, u.status
          FROM user AS u
          JOIN password AS p
            ON u.ID = p.user_id
          WHERE u.ID = '{$_POST['name']}'
            AND p.hash = '{$_POST['pass']}'
            AND u.status = 'active'
            ";

$result = mysqli_query($conn, $query);

$output = new stdClass;

$output->success = true;
$output->loggedin = false;

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 1){
        $user = mysqli_fetch_assoc($result);
        $_SESSION['userData'] = $user;

        $output->success = true;
        $output->userData = $user;
        print('User logged in');
    } else{
        print('Data invalid');
    }
} else{
    print('Query failed');
}

$messages = ob_get_contents();
ob_end_clean();
$output->message = $messages;
print(json_encode($output));

?>