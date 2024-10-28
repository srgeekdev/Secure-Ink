<?php
session_start();
include("connect.php");

if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];

    // Prepare statement to fetch user name
    $stmt = $conn->prepare("SELECT name FROM users WHERE email = ?");
    $stmt->bind_param("s", $email); // "s" indicates the variable type as a string
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if result is valid and has at least one row
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo htmlspecialchars($row['name']); // Secure output against XSS
    } else {
        echo "User not found.";
    }
    
    // Close statement
    $stmt->close();
} else {
    echo "Guest";
}

?>
