<?php

require_once('mysql_connect.php');

$output=[];
$symptomGroupID = $_POST['ID'];

$query = "SELECT s.ID as _id, s.name  
          FROM symptom AS s 
          JOIN symptoms_groups AS sg ON s.ID = sg.symptom_id 
          JOIN symptom_group AS g ON g.ID = sg.symptom_group_id 
          WHERE g.ID = '$symptomGroupID'
          ";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $output[] = $row;
    }
} else {
    $output['Errors'][] = 'Invalid search. No data available.';
}

?>