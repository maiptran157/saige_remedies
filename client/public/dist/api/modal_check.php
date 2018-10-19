<?php
session_start();

if($_SESSION['userAgreement']){
    $output['userAgreement'] = true;
} else {$output['userAgreement'] = false;
}

?>