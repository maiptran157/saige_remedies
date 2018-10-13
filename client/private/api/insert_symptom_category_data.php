<?php
require_once('mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

// // print_r($decode);
// print('<br>');
// print('<br>');
// // print_r($decode[0]);
// print('<br>');
// print('<br>');
// print_r($decode[0]['Category']);
// print('<br>');
// print('<br>');

for($i = 0; $i< count($decode); $i++){

if(empty($decode[$i]['Category'])){
    $category = null;
} else {
    $category = $decode[$i]['Category'];
}

$query = "INSERT INTO symptom_group SET symptom_category = '$category'";
$result = mysqli_query($conn, $query);

};

 ?>