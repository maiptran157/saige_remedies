<?php

session_start();
unset($_SESSION['userData']);
session_destroy();

$output = ['success'=>true, 'loggedin'=>false];

?>