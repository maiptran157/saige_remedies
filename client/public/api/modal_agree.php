<?php
require_once('mysql_connect.php');
session_start();

$_SESSION['userAgreement'] = true;
$output['userAgreement'] = true;

?>