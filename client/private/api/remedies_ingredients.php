<?php
require_once('mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);


for($i = 0; $i< count($decode); $i++){
    //Inserting symptomID to symptom_remedy table
$jsonName = $decode[$i]['Name'];
$symptomQuery = "SELECT * FROM symptom WHERE name = '$jsonName'";
$symptomResult = mysqli_query($conn, $symptomQuery);


if($ingredientResult){
    $ingredientID = mysqli_fetch_assoc($ingredientResult)['ID'];
    $ingredientRemIngrQuery = "INSERT INTO remedies_ingredients SET ID = null,remedy_id = '$remedyID',ingredient_id = '$ingredientID'";
//Query to run:=============================================================================================
//COMPLETED $insertIngredientID = mysqli_query($conn, $ingredientRemIngrQuery);
// print($ingredientID);
// print($remedyID);




?>

