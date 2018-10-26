<?php

require_once('../../public/dist/api/mysql_connect.php');

$query = "SELECT name FROM symptom";
$result = mysqli_query($conn,$query);

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows > 0){
        while($symptomName = mysqli_fetch_assoc($result)['name']){
            $soundex = soundex($symptomName);
            
            $soundexQuery = "INSERT INTO symptom SET "

        }
    }
}

print('TEST:');
print('<br>');
print(soundex('TEST'));

print('TEST:');
print('<br>');
print(soundex('TEST'));

?>