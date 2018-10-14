<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');

$output = [
    'success'=> false
];

require_once('post/mysql_connect.php');

print('connection working');

$request = $_GET['request'];

switch($request){
    case 'symptom_category':
        require_once('post/symptom_category.php');
        break;
    case 'remedy_detail':
        require_once('post/remedy_detail.php');
        break;
    case 'reviews':
        require_once('post/reviews.php');
        break;
    case 'login':
        require_once('post/login.php');
        break;
    case 'sign_up': 
        require_once('post/sign_up.php');
        break;
    case 'symptom_details': 
        require_once('post/symptom_details.php');
        break;
    case 'symptom_list':
        require_once('post/symptom_list.php');
        break;
    default:
        $output['Errors'] = 'Request URL failed';
}

$output = json_encode($output);
echo $output;

?>


