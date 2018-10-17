<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');

require_once('mysql_connect.php');

// print('connection working');

$request = $_GET['request'];

switch($request){
    case 'symptom_category':
        require_once('symptom_category.php');
        break;
    case 'remedy_detail':
        require_once('remedy_detail.php');
        break;
    case 'reviews':
        require_once('reviews.php');
        break;
    case 'login':
        require_once('login.php');
        break;
    case 'sign_up': 
        require_once('sign_up.php');
        break;
    case 'symptom_details': 
        require_once('symptom_details.php');
        break;
    case 'symptom_list':
        require_once('symptom_list.php');
        break;
    case 'search_symptom':
        require_once('search_symptom.php');
        break;
    default:
        $output['Errors'] = 'Request URL failed';
}

$output = json_encode($output);
echo $output;

?>


