<?php
$raw_sayings = file_get_contents('responses.txt');
$sayings_arr = explode("\n", $raw_sayings);
$response_arr = array('answer'=>$sayings_arr[rand(0, count($sayings_arr)-1)]);
echo json_encode($response_arr);
?>