<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

    for($i = 0; $i< count($decode); $i++){
        $jsonName = addslashes($decode[$i]['Name']);
        $symptomQuery = "SELECT * FROM symptom WHERE name = '$jsonName'";
        $symptomResult = mysqli_query($conn, $symptomQuery);
        
        if($decode[$i]['Category'] && $symptomResult){
            $symptomID = addslashes(mysqli_fetch_assoc($symptomResult)['ID']);
            $jsonCategory = addslashes($decode[$i]['Category']);
            $categoryIDQuery = "SELECT * FROM symptom_group WHERE symptom_category = '$jsonCategory'";
            $categoryResult= mysqli_query($conn, $categoryIDQuery);
        
            if($categoryResult){
                $categoryID = addslashes(mysqli_fetch_assoc($categoryResult)['ID']);
                $categorySymGroupQuery = "INSERT INTO symptoms_groups SET ID = null,symptom_group_id = '$categoryID',symptom_id = '$symptomID'";

                $symptomGroupDuplicateCheck = "SELECT * from symptoms_groups WHERE symptom_group_id = '$categoryID' AND symptom_id = '$symptomID'";
                $symptomGroupResult = mysqli_query($conn, $symptomGroupDuplicateCheck);

                if($symptomGroupResult){
                    $symptomGroupNumRows = mysqli_num_rows($symptomGroupResult);
                    if($symptomGroupNumRows < 1){
                        //Query to run: 
                        mysqli_query($conn, $categorySymGroupQuery);  
    }}}}}

 ?>