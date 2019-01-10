<?php

require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);


for($i = 0; $i< count($decode); $i++){
    $name = addslashes($decode[$i]['Name']);
    $description = addslashes($decode[$i]['Description']);
    $treatment = $decode[$i]['Treatment'];
    $category = $decode[$i]['Category'];

    // print('name: ');
    // print($name);
    // print('<br>');
    // print('Description: ');
    // print($description);
    // print('<br>');
    // print('Treatment: ');
    // print_r($treatment);
    // print('<br>');
    print('Category: ');
    print('<br>');
    print($category);
    print('<br>');
    print('<br>');
}

?>