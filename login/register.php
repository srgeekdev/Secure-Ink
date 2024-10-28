<?php
include 'connect.php';

if (isset($_POST['signUp'])) {
    $name = $_POST['fullName'];
    $email = strtolower($_POST['email']);
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    if ($password === null) {
        echo "Password is required.";
        exit();
    }

    // Rest of your code...


// Save email to DB

    $password = $_POST['password'];

    // Check if email already exists
    $checkEmail = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($checkEmail);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Email Address Already Exists!";
    } else {
        // Insert the plain-text password directly into the database
        $insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sss", $name, $email, $password);

        if ($stmt->execute()) {
            header("Location: index.php"); // Redirect after successful registration
            exit();
        } else {
            echo "Error: " . $conn->error;
        }
    }

    $stmt->close();
}

if (isset($_POST['signIn'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Retrieve the user from the database
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Compare the plain-text password directly
        if ($password === $row['Password']) {
            session_start();
            $_SESSION['user_id'] = $row['Id'];
            $_SESSION['email'] = $row['email'];
            header("Location: index.html");
            exit();
        } else {
            echo "Incorrect Email or Password";
        }
    } else {
        // If no user is found
        echo "User not found";
    }

    $stmt->close();
} else {
    echo "Sign-in form not submitted properly.";
}
