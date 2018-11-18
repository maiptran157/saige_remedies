<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

for($i = 0; $i< count($decode); $i++){
    for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
        for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){

            $herbName = addslashes($decode[$i]['Treatment'][$u]['Herb'][$e]);

            $duplicateCheckQuery = "SELECT * FROM ingredient WHERE name = '$herbName'";
            $result = mysqli_query($conn, $duplicateCheckQuery);
            
            if($result){
            $numRows = mysqli_num_rows($result);
            
            if($numRows < 1){
                $insertIngredientQuery = "INSERT INTO ingredient SET ID = null, name = '$herbName'";
                //This will add to database: 
                mysqli_query($conn, $insertIngredientQuery);
            }
            }
    }
        }};

 ?>