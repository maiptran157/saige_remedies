<?php

require_once('mysql_connect.php');

$output=[];

print('symptom_category running: ');

$query = "SELECT ID AS _id, short_name AS name, `URL` as img FROM symptom_group";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $output[] = $row;
    }
} else {
    $output['Errors'][] = 'Invalid search. No data available.';
}

?>