<?php

require_once('mysql_connect.php');

$searchString = addslashes($_POST['search_term']);

$query = "SELECT s.ID as _id
          FROM symptom AS s
          WHERE s.name = '$searchString'";

$result = mysqli_query($conn, $query);

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 0){
        $row = mysqli_fetch_assoc($result);
        $_POST['ID'] = $row['_id'];
        require_once('post/symptom_details.php');
    }
}

?>