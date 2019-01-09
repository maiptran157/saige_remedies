<?php

require_once('mysql_connect.php');
$output=[];
$remedyID = $_POST['ID'];

$remedyQuery = "SELECT r.ID AS remedy_id, r.instructions AS remedy
                FROM remedy AS r
                WHERE r.ID = '$remedyID'
                ";

$remedyResult = mysqli_query($conn, $remedyQuery);

$ingredientsQuery = "SELECT i.ID AS ingredient_id, i.name AS ingredient 
                     FROM ingredient AS i
                     JOIN remedies_ingredients AS ri
                        ON ri.ingredient_id = i.ID
                     JOIN remedy AS r
                        ON r.ID = ri.remedy_id
                     WHERE r.ID = '$remedyID'
                     ";

$ingredientsResult = mysqli_query($conn, $ingredientsQuery);

$reviewsQuery = "SELECT r.ID AS review_id, u.username, r.date_posted, r.review, r.rating
                 FROM reviews AS r
                 JOIN user AS u
                    ON u.ID = r.user_id
                 JOIN remedy AS rem
                    ON r.remedy_id = rem.ID
                 WHERE r.remedy_ID = '$remedyID'
                 AND u.status = 'active'
                 ORDER BY r.date_posted
                ";

$reviewResult = mysqli_query($conn, $reviewsQuery);

if($remedyResult){
    $remedyNumRows = mysqli_num_rows($remedyResult);
    if($remedyNumRows > 0){
        $output =  mysqli_fetch_assoc($remedyResult);
}}

if($ingredientsResult){
    $ingredientNumRows = mysqli_num_rows($ingredientsResult);
    if($ingredientNumRows > 0 ){
        while($ingredientRow = mysqli_fetch_assoc($ingredientsResult)){
            $output['ingredients'][] = $ingredientRow;
}}}

if($reviewResult){
    $remedyNumRows = mysqli_num_rows($reviewResult);
    if($remedyNumRows > 0){
        while($remedyRow = mysqli_fetch_assoc($reviewResult)){
            $output['reviews'][] = $remedyRow;     
}}}

?>