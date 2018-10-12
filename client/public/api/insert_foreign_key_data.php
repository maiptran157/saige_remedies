<?php
require_once('mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

// //loop through the count
// for($i = 0; $i< count($decode); $i++){
//     for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
//         for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){

//  if(empty($decode[$i]['Treatment'][$u]['Herb'][$e])){
//         $ingredient = null;
//     } else {
//         // print('i'.$i.'u'.$u.'e'.$e);
//         $ingredient = $decode[$i]['Treatment'][$u]['Herb'][$e];
//         print($ingredient);
//         //Test the print of ingredients before running the query below. Query will insert data into table.
//         // $query = "INSERT INTO ingredient SET name = '$ingredient'";
//         // mysqli_query($conn,$query);

//     }
//         }}};

// INSERT INTO `symptoms_groups` SET ID = null, `symptom_id` = 10088, `symptom_group_id` = 52

//------------------------------------------------------------------
            //Storing IDs for symptom and remedy to be inserted into different tables
    for($i = 0; $i< count($decode); $i++){
                 //Inserting symptomID to symptom_remedy table
        $jsonName = $decode[$i]['Name'];
        $symptomQuery = "SELECT * FROM symptom WHERE name = '$jsonName'";
        $symptomResult = mysqli_query($conn, $symptomQuery);

        if($symptomResult){
            $symptomID = mysqli_fetch_assoc($symptomResult)['ID']; //works outside the for loop
            //REMOVED $symptomSymRemQuery = "INSERT INTO symptom_remedy SET symptom_id = '$symptomID'";
            //REMOVED $symptomSymGroupQuery = "INSERT INTO symptoms_groups SET symptom_id = '$symptomID'";
        }

        //Establishing current category ID
        
        
        if($decode[$i]['Category']){
            $jsonCategory = $decode[$i]['Category'];
            $categoryIDQuery = "SELECT * FROM symptom_group WHERE symptom_category = '$jsonCategory'";
            $categoryResult= mysqli_query($conn, $categoryIDQuery);
        }

        if($categoryResult){
            $categoryID = mysqli_fetch_assoc($categoryResult)['ID'];
            //Inserting categoryID to symptoms_remedies table
            $categorySymGroupQuery = "INSERT INTO symptoms_groups SET ID = null,symptom_group_id = '$categoryID',symptom_id = '$symptomID'";
            //Query to run:============================================================================================= 
            //TURNED OFF $categorySymGroupResult = mysqli_query($conn, $categorySymGroupQuery);
        }

            for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
            //Inserting remedyID to symptom_remedy table
                $jsonInstructions = $decode[$i]['Treatment'][$u]['Remedy'];
                $remedyQuery = "SELECT * FROM remedy WHERE instructions = '$jsonInstructions'";
                $remedyResult = mysqli_query($conn, $remedyQuery);

                for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){
                    $jsonIngredient = $decode[$i]['Treatment'][$u]['Herb'][$e];
                    $ingredientQuery = "SELECT * FROM ingredient WHERE name = '$jsonIngredient'";
                    $ingredientResult = mysqli_query($conn, $ingredientQuery);
                    //Inserts ingredientID into remedies_ingredients table
                

                if($remedyResult){
                    $remedyID = mysqli_fetch_assoc($remedyResult)['ID'];
                    $remedySymRemQuery = "INSERT INTO symptom_remedy SET ID = null,symptom_id = '$symptomID',remedy_id = '$remedyID'";
                    //Query to run:============================================================================================= 
                    //TURNED OFF $insertRemedyID = mysqli_query($conn, $remedySymRemQuery);
                    // REMOVED $remedyRemIngrQuery = "INSERT INTO remedies_ingredients SET remedy_id = '$remedyID'";
                    if($ingredientResult){
                        $ingredientID = mysqli_fetch_assoc($ingredientResult)['ID'];
                        $ingredientRemIngrQuery = "INSERT INTO remedies_ingredients SET ID = null,remedy_id = '$remedyID',ingredient_id = '$ingredientID'";
                    //Query to run:=============================================================================================
                    // REMOVED $insertIngredientID = mysqli_query($conn, $ingredientRemIngrQuery);
                    // print($ingredientID);
                    // print($remedyID);

                }}

                if($ingredientResult){
                    $ingredientID = mysqli_fetch_assoc($ingredientResult)['ID'];

                    //Insert into ingredients_classifications table
                    $classificationID = "SELECT ID FROM ingredient_classification WHERE name = 'Herb'";
                    // REMOVED $ingredientClassificationQuery = "INSERT INTO ingredients_classifications SET ingredient_classification_id = '$classificationID'";

                    $ingredientQueryIngrClass = "INSERT INTO ingredients_classifications SET ID = null,ingredient_id = '$ingredientID',ingredient_classification_id = '$classificationID'";
                    //Query to run:============================================================================================= 
                    $ingredientResultIngrClass = mysqli_query($conn, $ingredientQueryIngrClass);
                    // print($ingredientID);
                    // print($classificationID);
            }}
       

    }}












 ?>