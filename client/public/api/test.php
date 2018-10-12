<?php

require_once('mysql_connect.php');
$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);


print_r($decode[0]['Category']);


// for($i = 0; $i< count($decode); $i++){
//     for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
// //Inserting remedyID to symptom_remedy table
//         $jsonInstructions = $decode[$i]['Treatment'][$u]['Remedy'];
        
//         $remedyQuery = "SELECT * FROM remedy WHERE instructions = '$jsonInstructions'";
//         $remedyResult = mysqli_query($conn, $remedyQuery);
//         if($remedyResult){
//             $row = mysqli_fetch_assoc($remedyResult);
//             print('i:'.$i.' u:'.$u.':');
//             print_r($row['ID']);
//             print('<br><br>');
//         }
//     }
    // echo ($jsonInstructions);
    // print('<br>');
    // print('<br>');
    // $remedyQuery = "SELECT * FROM remedy WHERE instructions = '$jsonInstructions'";


    // $remedyResult = mysqli_query($conn, $remedyQuery);
    
    // $row = mysqli_fetch_row($remedyResult);
    // // mysqli_data_seek($row, 0);
    // echo($row);
    // // mysqli_data_seek($row, 0);
    // print('<br>');
    // print('<br>');



    // }








//==================================

            // $jsonInstructions = $decode[9]['Treatment'][0]['Remedy'];
            // print('json instructions:');
            // print('<br>');
            // print_r($jsonInstructions);
            // print('<br>');
            // print('<br>');

            // $sanitized_string = $jsonInstructions;
            // $fully_sanitized_string=mysqli_real_escape_string($conn, $sanitized_string);
            // echo $fully_sanitized_string;

            // $remedyQuery = "SELECT * FROM `remedy` WHERE `instructions` = '$fully_sanitized_string'";
            // $test =  'test val';
          

            // // $jsonInstructions = $decode[0]['Treatment'][0]['Remedy'];
            // // $stmt = $conn->prepare("SELECT * FROM remedy WHERE instructions = ?");
            // // $stmt->bind_param("s",$test);
            // // $stmt->execute();
            // // $stmt->store_result();
            // // $num_rows = $stmt->num_rows;
            // // echo($num_rows);
            
            // print('stmt here:');
            // print('<br>');
            // // print_r($stmt);
            // // $stmt->close();

            // print('sanitized:');
            // print('<br>');
            // print($remedyQuery);
            // print('<br>');
            // print('<br>');

            // print('Query:');
            // print('<br>');
            // print($remedyQuery);
            // print('<br>');
            // print('<br>');
    
            // $remedyResult = mysqli_query($conn, $remedyQuery);
            // print('mysqli_query:');
            // print('<br>');
            // print_r($remedyResult);
            // print('<br>');
            // print('<br>');
    
            // //Storing IDs for symptom and remedy to be inserted into different tables

            // print('<br>');
            // print('num rows: ');
            // print(mysqli_num_rows($remedyResult));
            // print('<br>');
            // print('<br>');
            
            // $remedyID = mysqli_fetch_assoc($remedyResult);//wouldnt work

            // print('row result:');
            // print('<br>');
            // print_r($remedyID);



?>