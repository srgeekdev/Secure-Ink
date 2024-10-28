<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your actual password
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to store encryption/decryption data
function storeEncryptionData($title, $message, $secretKey, $result, $type) {
    global $conn;

    // Prepare SQL statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO history (title, message, secret_key, result, type) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $title, $message, $secretKey, $result, $type);

    // Execute and check if data is successfully inserted
    if ($stmt->execute()) {
        echo "Data stored successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Example usage - replace with your actual data
$title = "Sample Encryption";
$message = "This is a test message.";
$secretKey = "mySecretKey123";
$result = "Encrypted text here";  // Replace with actual encrypted/decrypted text
$type = "Encrypted"; // Use "Encrypted" or "Decrypted"

// Call the function
storeEncryptionData($title, $message, $secretKey, $result, $type);

$conn->close();
?>
