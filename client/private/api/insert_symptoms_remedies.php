<?php
require_once('../../public/api/post/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

    for($i = 0; $i< count($decode); $i++){
        $jsonName = addslashes($decode[$i]['Name']);
        $symptomQuery = "SELECT * FROM symptom WHERE name = '$jsonName'";
        $symptomResult = mysqli_query($conn, $symptomQuery);

        if($symptomResult){
            $symptomID = addslashes(mysqli_fetch_assoc($symptomResult)['ID']);
        
            for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
                $jsonInstructions = addslashes($decode[$i]['Treatment'][$u]['Remedy']);
                $remedyQuery = "SELECT * FROM remedy WHERE instructions = '$jsonInstructions'";
                $remedyResult = mysqli_query($conn, $remedyQuery);

                for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){
                    
                    if($remedyResult){
                        $remedyID = addslashes(mysqli_fetch_assoc($remedyResult)['ID']);
                        $symptomsRemediesQuery = "INSERT INTO symptoms_remedies SET ID = null,symptom_id = '$symptomID',remedy_id = '$remedyID'";

                        $symptomsRemediesDuplicateCheck = "SELECT * FROM symptoms_remedies WHERE symptom_id = '$symptomID' AND remedy_id = '$remedyID'";
                        $symptomsRemediesresults = mysqli_query($conn, $symptomsRemediesDuplicateCheck);

                        if($symptomsRemediesresults){
                            $symptomsRemediesNumRows = mysqli_num_rows($symptomsRemediesresults);
                            if($symptomsRemediesNumRows < 1){
                                //Query to run: 
                                mysqli_query($conn, $symptomsRemediesQuery);
    }}}}}}}

 ?>