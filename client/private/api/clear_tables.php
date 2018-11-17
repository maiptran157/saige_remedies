<?php
require_once('../../public/dist/api/mysql_connect.php');

$foreign_key_check_off = "SET FOREIGN_KEY_CHECKS = 0"; 
mysqli_query($conn,$foreign_key_check_off);

$truncate_ingredient = "TRUNCATE table ingredient";
mysqli_query($conn,$truncate_ingredient);

$truncate_ingredients_classifications = "TRUNCATE table ingredients_classifications"; 
mysqli_query($conn,$truncate_ingredients_classifications);

$truncate_ingredient_classifcation = "TRUNCATE table ingredient_classifcation"; 
mysqli_query($conn,$truncate_ingredient_classifcation);

$truncate_remedies_ingredients = "TRUNCATE table remedies_ingredients"; 
mysqli_query($conn,$truncate_remedies_ingredients);

$truncate_remedy = "TRUNCATE table remedy"; 
mysqli_query($conn,$truncate_remedy);

$truncate_symptom = "TRUNCATE table symptom"; 
mysqli_query($conn,$truncate_symptom);

$truncate_symptoms_groups = "TRUNCATE table symptoms_groups"; 
mysqli_query($conn,$truncate_symptoms_groups);

$truncate_symptoms_remedies = "TRUNCATE table symptoms_remedies"; 
mysqli_query($conn,$truncate_symptoms_remedies);

$truncate_symptom_group = "TRUNCATE table symptom_group"; 
mysqli_query($conn,$truncate_symptom_group);

// $truncate_user = "TRUNCATE table user"; 
// mysqli_query($conn,$truncate_user);

// $truncate_password = "TRUNCATE table password";
// mysqli_query($conn,$truncate_password);

// $truncate_reviews = "TRUNCATE table reviews";
// mysqli_query($conn,$truncate_reviews);

$foreign_key_check_on = "SET FOREIGN_KEY_CHECKS = 1";
mysqli_query($conn,$foreign_key_check_on);
?>