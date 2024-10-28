<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_SESSION['user_id'];
$sql = "SELECT * FROM history WHERE user_id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['title']) . "</td>";
        echo "<td>" . htmlspecialchars($row['message']) . "</td>";
        echo "<td>" . htmlspecialchars($row['secret_key']) . "</td>";
        echo "<td>" . htmlspecialchars($row['encrypted_text'] ?: $row['decrypted_text']) . "</td>";
        echo "<td><button class='btn-delete' onclick='deleteEntry(" . $row['id'] . ")'>Delete</button></td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='5'>No history available.</td></tr>";
}
$conn->close();
?>
