<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

for($i = 0; $i< count($decode); $i++){
    for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
        $remedyInstructions = addslashes($decode[$i]['Treatment'][$u]['Remedy']);

        $duplicateCheckQuery = "SELECT * FROM remedy WHERE instructions = '$remedyInstructions'";
        
        $result = mysqli_query($conn, $duplicateCheckQuery);

        if($result){
            $numRows = mysqli_num_rows($result);

            if($numRows < 1){
                $insertQuery = "INSERT INTO remedy SET ID = null, instructions = '$remedyInstructions'";
                //This will insert into the database: 
                mysqli_query($conn, $insertQuery);
                
            }
    
        }

    }}

 ?>