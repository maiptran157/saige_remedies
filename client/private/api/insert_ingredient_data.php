<?php
require_once('mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

//loop through the count
for($i = 0; $i< count($decode); $i++){
    for($u = 0; $u < count($decode[$i]['Treatment']); $u++){
        for($e = 0; $e < count($decode[$i]['Treatment'][$u]['Herb']); $e++){

 if(empty($decode[$i]['Treatment'][$u]['Herb'][$e])){
        $ingredient = null;
    } else {
        // print('i'.$i.'u'.$u.'e'.$e);
        $ingredient = $decode[$i]['Treatment'][$u]['Herb'][$e];
        print($ingredient);
        //Test the print of ingredients before running the query below. Query will insert data into table.
        // $query = "INSERT INTO ingredient SET name = '$ingredient'";
        // mysqli_query($conn,$query);

    }
        }}};

 ?>