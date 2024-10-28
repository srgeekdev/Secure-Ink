<?php
include("connect.php");
session_start();

if($_SERVER['REQUEST_METHOD']== "POST") {
    $user_id = $_SESSION['user_id'];

    $title = $_POST['title'];
    $message = $_POST['text'];
    $secret_key = $_POST['key'];
    $decryptedText = $_POST['decryptedText'];


    $sql = "INSERT INTO history ( title ,message ,secret_key ,decrypted_text, user_id)
    VALUES ( '$title',  '$message',  '$secret_key',  '$decryptedText', '$user_id')";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
} else {
    echo "Only post methods areallowed";
}

?>