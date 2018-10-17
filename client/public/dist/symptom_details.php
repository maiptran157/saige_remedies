<?php

require_once('mysql_connect.php');

$output=[];
$symptomID = addslashes($_POST['ID']);
$remedyID = null;

$symptomDataQuery = "SELECT s.ID AS _id, s.name, sg.symptom_category AS category, s.description, s.caution, s.self_help
                     FROM symptom AS s
                     JOIN symptoms_groups AS sgs
                        ON s.ID = sgs.symptom_id
                     JOIN symptom_group AS sg
                        ON sg.ID = sgs.symptom_group_id
                     WHERE s.ID = '$symptomID'
                    ";

$symptomDataResult = mysqli_query($conn, $symptomDataQuery);

$remedyDataQuery = "SELECT r.ID AS _id
                    FROM remedy AS r
                    JOIN symptoms_remedies AS sr
                        ON r.ID = sr.remedy_id
                    JOIN symptom AS s
                        ON s.ID = sr.symptom_id
                    WHERE s.ID = '$symptomID'
                    ";

$remedyDataResult = mysqli_query($conn, $remedyDataQuery);

if(mysqli_num_rows($symptomDataResult) > 0){
    $remedyArray = array();
        if($remedyDataResult){
            if(mysqli_num_rows($remedyDataResult) > 0){
                while($remedyRow = mysqli_fetch_assoc($remedyDataResult)){
                    $remedyID = addslashes($remedyRow['_id']);
                    $ingredientsDataQuery = "SELECT i.id AS _id, i.name
                            FROM ingredient AS i
                            JOIN remedies_ingredients AS ri
                                ON i.ID = ri.ingredient_id
                            JOIN remedy as r
                                ON r.ID = ri.remedy_id
                            WHERE r.ID = '$remedyID'
                            ";     

                    $ingredientsDataResult = mysqli_query($conn, $ingredientsDataQuery);
                    
                    if(mysqli_num_rows($ingredientsDataResult) > 0){
                        $ingredientsArray = array();
                        while($ingredientRow = mysqli_fetch_assoc($ingredientsDataResult)){
                            $ingredientsArray[] = $ingredientRow;
                        }}

                    $remedyRow['ingredients'] = $ingredientsArray;
                    $remedyArray[] = $remedyRow;
                }}
        }

        while($symptomRow = mysqli_fetch_assoc($symptomDataResult)){
            $symptomRow['treatment'] = $remedyArray;
            $output[] = $symptomRow;
    }
} else {
    $output['Errors'][] = 'Invalid search. No data available.';
}

?>