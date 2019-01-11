<?php
session_start();
require_once('mysql_connect.php');

$review = $_POST['review'];
$rating = $_POST['rating'];
$reviewID = $_POST['reviewID'];

$output = [];

if($review && $rating){

        $stmtReview = $conn->prepare("UPDATE reviews SET rating = ?, review= ? WHERE ID = ?");
        $stmtReview->bind_param("sss", $rating, $review, $reviewID);

        if(!$stmtReview->execute()){
            $output['message'] = 'Review update failed';  
        } else{
            $output['message'] = 'Review has been update';
        }
    } else{
        $output['message'] = 'Please include both a review and rating';
}

$stmtReview->close();

?>