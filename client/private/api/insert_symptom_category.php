<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);


for($i = 0; $i< count($decode); $i++){

    if(empty($decode[$i]['Category'])){
        $category = null;
    } else {
        $category = addslashes($decode[$i]['Category']);
    }

    $query = "INSERT INTO symptom_group SET symptom_category = '$category'";
    
    $duplicateCheck = "SELECT * FROM symptom_group WHERE symptom_category = '$category'";
    $result = mysqli_query($conn, $duplicateCheck);

    if($result){
        $numRows = mysqli_num_rows($result);
        if($numRows < 1){
            //The below will insert into the database:
            mysqli_query($conn, $query);
        }
    }
    

}

 ?>