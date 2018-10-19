<?php

session_start();
unset($_SESSION['userData']);
session_destroy();

print(json_encode(['success'=>true, 'loggedin'=>false]));

?>