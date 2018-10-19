<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');

require_once('mysql_connect.php');

$request = $_GET['request'];

switch($request){
    case 'check_login':
    require_once('check_login.php');
    break;
    case 'login':
        require_once('login.php');
        break;
    case 'logout':
        require_once('logout.php');
        break;
    case 'modal_agree':
        require_once('modal_agree.php');
        break;
    case 'modal_check':
        require_once('modal_check.php');
        break;
    case 'remedy_detail':
        require_once('remedy_detail.php');
        break;
    case 'search_symptom':
        require_once('search_symptom.php');
        break;
    case 'session_check':
        require_once('session_check.php');
        break;
    case 'sign_up': 
        require_once('sign_up.php');
        break;
    case 'submit_review':
        require_once('submit_review.php');
        break;
    case 'symptom_category':
        require_once('symptom_category.php');
        break;
    case 'symptom_details': 
        require_once('symptom_details.php');
        break;
    case 'symptom_list':
        require_once('symptom_list.php');
        break;
    case 'user_sign_up_check':
        require_once('user_sign_up_check.php');
        break;
    default:
        $output['Errors'] = 'Request URL failed';
}

$output = json_encode($output);
echo $output;

?>


