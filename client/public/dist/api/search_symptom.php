<?php

require_once('mysql_connect.php');

$searchTerm = addslashes($_POST['search_term']);
$searchString = ucwords(strtolower($searchTerm));
$soundexValue = soundex($searchTerm);

$output=[];

$searchTermQuery = "SELECT s.ID AS symptom_id, sg.ID AS category_id
                    FROM symptom AS s
                    JOIN symptoms_groups AS sgs
                      ON s.ID = sgs.symptom_id
                    JOIN symptom_group AS sg
                      ON sg.ID = sgs.symptom_group_id
                    WHERE s.name = '$searchString'
                    ";

$searchTermResult = mysqli_query($conn, $searchTermQuery);

$soundexQuery = "SELECT s.name, s.ID AS symptom_id, sg.ID AS category_id
                  FROM symptom AS s
                  JOIN symptoms_groups AS sgs
                    ON s.ID = sgs.symptom_id
                  JOIN symptom_group AS sg
                    ON sg.ID = sgs.symptom_group_id
                  WHERE s.soundex_value = '$soundexValue'
                  ";
$soundexResult = mysqli_query($conn, $soundexQuery);

if($searchTermResult){
    $numRows = mysqli_num_rows($searchTermResult);
    if($numRows > 0){
        $searchTermRow = mysqli_fetch_assoc($searchTermResult);
        $output['symptom_id'] = $searchTermRow['symptom_id'];
        $output['category_id'] = $searchTermRow['category_id'];
    } else if($soundexResult){
      $soundexNumRows = mysqli_num_rows($soundexResult);
        if($soundexNumRows > 0){
          $soundexRow = mysqli_fetch_assoc($soundexResult);
          $output['message'] = "Soundex used for '". $searchTerm."'.";
          $output['name'] = $soundexRow['name'];
          $output['symptom_id'] = $soundexRow['symptom_id'];
          $output['category_id'] = $soundexRow['category_id'];
        }else {
            $output['message'] = 'Search failed.';
}}}

?>