<?php

require_once('mysql_connect.php');

$output=[];
$symptomID = $_POST['ID'];
$remedyID = null;

$symptomDataQuery = "SELECT s.ID AS _id,s.name, s.description, s.caution, s.self_help
                     FROM symptom AS s
                     WHERE s.ID = '$symptomID'
                    ";

$symptomDataResult = mysqli_query($conn, $symptomDataQuery);

$remedyDataQuery = "SELECT r.ID AS _id, r.instructions
                    FROM remedy AS r
                    JOIN symptoms_remedies AS sr
                        ON r.ID = sr.remedy_id
                    JOIN symptom AS s
                        ON s.ID = sr.symptom_id
                    WHERE s.ID = '$symptomID'
                    ";

$remedyDataResult = mysqli_query($conn, $remedyDataQuery);

//get r.ID of current and assign to variable $remedyID


                        

// $result = mysqli_query($conn, $query);
// $numResults = new stdClass();
// $numResults->numresults = mysqli_num_rows($result);
// $output['data'][] = $numResults;


if(mysqli_num_rows($symptomDataResult) > 0){
    while($symptomRow = mysqli_fetch_assoc($symptomDataResult)){

        $remedyArray = array();

        if($remedyDataResult){
            if(mysqli_num_rows($remedyDataResult) > 0){
                while($remedyRow = mysqli_fetch_assoc($remedyDataResult)){
                    // print('HERE');
                    // print_r($remedyRow['_id']);
                    $remedyID = $remedyRow['_id'];
                    // print('LOOK');
                    // print_r($remedyID);
                    // $ingredientsArray = array();

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
                        while($ingredientRow = mysqli_fetch_assoc($ingredientsDataResult)){
                            
                            $ingredientsArray[] = $ingredientRow;
                        }}

                    $remedyRow['Ingredients'] = $ingredientsArray;
                    $remedyArray[] = $remedyRow;
                }}
            }

        $symptomRow['Remedies'] = $remedyArray;
        $output[] = $symptomRow;
    }
} else {
    $output['Errors'][] = 'Invalid search. No data available.';
}




?>