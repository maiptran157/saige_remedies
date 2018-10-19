<?php
session_start();

$output['userAgreement'] = false;

if($_SESSION['userAgreement']){
    $output['userAgreement'] = true;
}

?>