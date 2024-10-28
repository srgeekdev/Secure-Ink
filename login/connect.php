<?php
$host = "localhost";  // Corrected variable name
$user = "root";
$pass = "";
$db = "login";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo "Failed to connect to Database: " . $conn->connect_error;
} else {
    echo "Database connection successful!";
    
}
?>
