<?php
require_once('../../public/dist/api/mysql_connect.php');

$json_data = file_get_contents('dummy_data.json');
$decode = json_decode($json_data,true);

for($i = 0; $i< count($decode); $i++){

    $name = addslashes($decode[$i]['Name']);
    $description = addslashes($decode[$i]['Description']);

    if(empty($decode[$i]['Self-help'])){
        $self_help =  null;
            } else{
                $self_help =  addslashes($decode[$i]['Self-help']);}

    if(empty($decode[$i]['Caution'])){
        $caution =  null;
            } else{
                $caution =  addslashes($decode[$i]['Caution']);}

    $query = "INSERT INTO symptom (name, description, self_help, caution) VALUES ('$name', '$description','$self_help','$caution')";

    $duplicateCheckQuery = "SELECT * FROM symptom WHERE name = '$name' AND description = '$description' AND self_help = '$self_help' AND caution = '$caution'";
    $result = mysqli_query($conn, $duplicateCheckQuery);

    if($result){
        $numRows = mysqli_num_rows($result);
        
        if($numRows < 1){
            //This will insert into the database:
            mysqli_query($conn, $query);
        }
    }
}

 ?>