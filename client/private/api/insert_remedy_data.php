<?php
require_once('mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

//loop through the count
for($i = 0; $i< count($decode); $i++){
    for($u = 0; $u < count($decode[$i]['Treatment']); $u++){

 if(empty($decode[$i]['Treatment'][$u]['Remedy'])){
        $remedy = null;
    } else {
        // print('i'.$i.'u'.$u);
        $remedy = $decode[$i]['Treatment'][$u]['Remedy'];
        // print($remedy);
        // print('<br>');
        // print('<br>');

        //The below will run the insert. Only use after print is confirmed to be correct.
        $query = "INSERT INTO remedy SET instructions = '$remedy'";
        mysqli_query($conn,$query);

    }
        }};



 ?>