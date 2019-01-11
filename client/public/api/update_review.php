<?php
session_start();
require_once('mysql_connect.php');

$review = $_POST['review'];
$rating = $_POST['rating'];
$reviewID = $_POST['reviewID'];
$action = $_POST['action'];

$output = [];

if($action === 'remove'){
    $stmtReview = $conn->prepare("DELETE FROM reviews WHERE ID = ?");
    $stmtReview->bind_param("s", $reviewID);
    $stmtReview->execute();
    $stmtReview->close();
    $output['message'] = 'Review has been removed';
} else{
    if($action === 'update' && $review && $rating){
        $stmtReview = $conn->prepare("UPDATE reviews SET rating = ?, review= ? WHERE ID = ?");
        $stmtReview->bind_param("sss", $rating, $review, $reviewID);
        $stmtReview->execute();
        $stmtReview->close();
        $output['message'] = 'Review has been updated';
    } else{
        $output['message'] = 'Please include both a review and rating';
    }}



?>