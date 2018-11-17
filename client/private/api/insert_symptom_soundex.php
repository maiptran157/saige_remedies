<?php

require_once('../../public/dist/api/mysql_connect.php');

$query = "SELECT name FROM symptom";
$result = mysqli_query($conn,$query);

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 0){
        while($symptomName = mysqli_fetch_assoc($result)['name']){
            $soundex = soundex($symptomName);
            $soundexQuery = "UPDATE symptom SET soundex_value = '$soundex' WHERE name = '$symptomName'";
            mysqli_query($conn, $soundexQuery);
        }
    }
}

?>