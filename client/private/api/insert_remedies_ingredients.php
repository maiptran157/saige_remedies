<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

    for($i = 0; $i< count($decode); $i++){
            for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
                $jsonInstructions = addslashes($decode[$i]['Treatment'][$u]['Remedy']);
                $remedyQuery = "SELECT * FROM remedy WHERE instructions = '$jsonInstructions'";
                $remedyResult = mysqli_query($conn, $remedyQuery);

                if($remedyResult){
                    $remedyID = addslashes(mysqli_fetch_assoc($remedyResult)['ID']);

                    for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){
                        $jsonIngredient = addslashes($decode[$i]['Treatment'][$u]['Herb'][$e]);
                        $ingredientQuery = "SELECT * FROM ingredient WHERE name = '$jsonIngredient'";
                        $ingredientResult = mysqli_query($conn, $ingredientQuery);

                        if($ingredientResult){
                            
                            $ingredientID = addslashes(mysqli_fetch_assoc($ingredientResult)['ID']);
                            $remediesIngredientsQuery = "INSERT INTO remedies_ingredients SET ID = null,remedy_id = '$remedyID',ingredient_id = '$ingredientID'";

                            $remediesIngredientsDuplicateCheck = "SELECT * FROM remedies_ingredients WHERE remedy_id = '$remedyID' AND ingredient_id = '$ingredientID'";
                            $remediesIngrediesnResult = mysqli_query($conn, $remediesIngredientsDuplicateCheck);

                            if($remediesIngrediesnResult){
                                $remediesIngredientsNumRows = mysqli_num_rows($remediesIngrediesnResult);
                                if($remediesIngredientsNumRows < 1){
                                    //Query to run: 
                                    mysqli_query($conn, $remediesIngredientsQuery);
                                

    }}}}}}}

 ?>