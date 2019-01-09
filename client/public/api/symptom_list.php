<?php

require_once('mysql_connect.php');

$output=[];
$symptomGroupID = $_POST['ID'];

if($symptomGroupID == 12){
    $query = "SELECT s.ID AS _id, s.name  
              FROM symptom AS s
              ORDER BY s.name
             ";
    } else {
        $query = "SELECT s.ID AS _id, s.name  
                  FROM symptom AS s 
                  JOIN symptoms_groups AS sg ON s.ID = sg.symptom_id 
                  JOIN symptom_group AS g ON g.ID = sg.symptom_group_id 
                  WHERE g.ID = '$symptomGroupID'
                  ORDER BY s.name
                  ";}

$result = mysqli_query($conn, $query);

$querySymptomGroup = "SELECT symptom_category AS symptom_group
                      FROM symptom_group
                      WHERE ID = '$symptomGroupID'
                      ";

$resultSymptomGroup = mysqli_query($conn, $querySymptomGroup);

if($resultSymptomGroup){
    $numrowSymptomGroup = mysqli_num_rows($resultSymptomGroup);
    if($numrowSymptomGroup > 0){
        $rowSymptomGroup = mysqli_fetch_assoc($resultSymptomGroup);
    }
}

if(mysqli_num_rows($result) > 0){
    $output['symptom_group'] =  $rowSymptomGroup['symptom_group'];

    while($row = mysqli_fetch_assoc($result)){
        $output['symptoms'][] = $row;
    }
} else {
    $output['Errors'][] = 'Invalid search. No data available.';
}

?>