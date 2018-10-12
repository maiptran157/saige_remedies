<?php

print('connection working');


$array = array({name: 'test', description: 'test', self_help: 'test', caution: 'test'});

$symptomQuery = "INSERT INTO symptom (name, description, self_help, caution) 
VALUES (${array[0]->name},'${array[0]->description},${array[0]->self_help},${array[0]->caution});

$result = mysqli_query($conn, $symptomQuery);
?>
