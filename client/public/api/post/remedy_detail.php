<?php

require_once('mysqli_connect.php');

$output=[];
$remedyID = $_POST['ID'];

//pull remedy id, remedy instructions, ingrdient ids, ingredient names

$remedyQuery = "SELECT r.ID AS _id, r.instructions AS remedy
                FROM remedy
                WHERE r.ID = '$remedyID'
                ";
$remedyResult = mysqli_query($remedyQuery);

$ingredientsQuery = "SELECT i.ID AS _id, i.name AS ingredient 
                     FROM ingredient AS i
                     ";



?>