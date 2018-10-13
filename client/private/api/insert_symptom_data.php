<?php
require_once('mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

for($i = 0; $i< count($decode); $i++){

$name = $decode[$i]['Name'];
$description = $decode[$i]['Description'];

if(empty($decode[$i]['Self-help'])){
    $self_help =  null;
        } else{
            $self_help =  $decode[$i]['Self-help'];}

if(empty($decode[$i]['Caution'])){
     $caution =  null;
        } else{
            $caution =  $decode[$i]['Caution'];}

$query = "INSERT INTO symptom (name, description, self_help, caution) VALUES ('$name', '$description','$self_help','$caution')";
$query2 = "SELECT * FROM symptom LIMIT 5";
// print(mysqli_query($conn, $query2));

};


$result = mysqli_query($conn, $query2);
$row = mysqli_fetch_assoc($result); 
print_r($row);
print('<br>');
$row = mysqli_fetch_assoc($result); 
print_r($row['ID']);
print('<br>');
$row = mysqli_fetch_assoc($result); 
print_r($row['ID']);

// while($row = mysqli_fetch_assoc($result)){
//     print('<br');
//     print('<br');
//     print_r($row);
//     print('<br');
//     print('<br');
// }

// if(mysqli_num_rows($result) > 0){
//     while($row = mysqli_fetch_assoc($result)){
//         print_r($row);
//         print('<br');
//         print('<br');
//     }
// }

 ?>