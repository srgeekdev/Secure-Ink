<?php
// Check login status
if ($loginSuccess) {
    // Redirect to index.html after successful login
    header("Location: index.html");  // Ensure there is a space after "Location:"
    exit();  // Stop further execution of the script
} else {
    // Handle failed login (optional)
    echo "Login failed. Please try again.";
}
?>
