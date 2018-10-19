<?php

require_once('mysql_connect.php');

$searchString = addslashes($_POST['search_term']);

$output=[];

$query = "SELECT s.ID AS symptom_id, sg.ID AS category_id
          FROM symptom AS s
          JOIN symptoms_groups AS sgs
            ON s.ID = sgs.symptom_id
          JOIN symptom_group AS sg
            ON sg.ID = sgs.symptom_group_id
          WHERE s.name = '$searchString'
          ";

$result = mysqli_query($conn, $query);

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 0){
        $row = mysqli_fetch_assoc($result);
        $output['symptom_id'] = $row['symptom_id'];
        $output['category_id'] = $row['category_id'];
    }
}

?>