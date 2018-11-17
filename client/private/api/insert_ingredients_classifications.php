<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

    for($i = 0; $i< count($decode); $i++){
        for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
            for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){
                $jsonIngredient = addslashes($decode[$i]['Treatment'][$u]['Herb'][$e]);
                $ingredientQuery = "SELECT * FROM ingredient WHERE name = '$jsonIngredient'";
                $ingredientResult = mysqli_query($conn, $ingredientQuery);

                if($ingredientResult){
                    $ingredientID = addslashes(mysqli_fetch_assoc($ingredientResult)['ID']);
                    $classificationIDQuery = "SELECT * FROM ingredient_classification WHERE name = 'Herb'";
                    $classificationQueryResult = mysqli_query($conn,$classificationIDQuery);
                    $classificationID = addslashes(mysqli_fetch_assoc($classificationQueryResult)['ID']); 
                    
                    $ingredientsClassificationsQuery = "INSERT INTO ingredients_classifications SET ID = null,ingredient_id = '$ingredientID',ingredient_classification_id = '$classificationID'";
                    
                    $ingredientsClassificationsDuplicateCheck = "SELECT * FROM ingredients_classifications WHERE ingredient_id = '$ingredientID' AND ingredient_classification_id = '$classificationID'";
                    $ingredientsClassificationsResult = mysqli_query($conn, $ingredientsClassificationsDuplicateCheck);
                    
                    if($ingredientsClassificationsResult){
                        $ingredientsClassificationsNumRows = mysqli_num_rows($ingredientsClassificationsResult);
                        if($ingredientsClassificationsNumRows < 1){
                            //Query to run: 
                            mysqli_query($conn, $ingredientsClassificationsQuery);
    }}}}}}

 ?>