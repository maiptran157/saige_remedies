<?php
session_start();
require_once('mysql_connect.php');

$review = $_POST['review'];
$rating = $_POST['rating'];
$remedyID = $_POST['remedy_id'];
$userData = $_SESSION['userData'];
$null = null;

$output = [];

if($review && $rating){
    if($userData['status'] === 'active'){
        $stmtReview = $conn->prepare("INSERT INTO reviews (ID, remedy_id, user_id, rating, review) VALUES (?,?,?,?,?)");
        $stmtReview->bind_param("sssss", $null, $remedyID, $userData['_id'], $rating, $review);

        if(!$stmtReview->execute()){
            $output['message'] = 'Review submission failed';  
        } else{
            $output['message'] = 'Review has been submitted';
        }
    } else{
        $output['message'] = 'Please login to submit a review';  

    }
} else {
    $output['message'] = 'Please include both a review and rating';
}

$stmtReview->close();

?>