<?php
header("Access-Control-Allow-Origin: *");

$output = [
    "success" => false
];
$data = file_get_contents('php://input');
$data = json_decode($data,true);
if (!empty($data['prediction'])) {
    $text = $data['prediction'];
    $prediction = [
        "text" => $text
    ];
} else {
    $output["message"] = "Missing input for user's symptoms";
}

// print "JSON encoded prediction " . $prediction;

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.infermedica.com/v2/parse",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    // Since the API is requesting the Content-Type to be application/json, we json_encode the associative array into JSON format
    CURLOPT_POSTFIELDS => json_encode($prediction), 
    CURLOPT_HTTPHEADER => array(
    "App-Id: f9ac55d5",
    "App-Key: 894162dd0f01a303535a83abf6c3f268",
    "Content-Type: application/json"
    )
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
    $output["err"] = $err;
} else {
    // $output["data"] = stripslashes($response);
    $output['success'] = true;
    $output["data"] = json_decode($response);
}

// print json_encode($output);

?>