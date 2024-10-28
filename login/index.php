<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In / Sign Up</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="auth-wrapper">
        <div class="auth-card">
        <button id="skipBtn" class="skip-btn">Skip</button>

<script>
    document.getElementById("skipBtn").addEventListener("click", function() {
        window.location.href = "Skip/skip.html";  // Redirects to index.html
    });
</script>

            <div class="toggle-buttons">
                <button id="signInBtn" class="active">Sign In</button>
                <button id="signUpBtn">Sign Up</button>
            </div>
            <div class="form-container">
                <!-- Sign In Form -->
                <form id="signInForm" class="form active" method="post" action="register.php">
                    <h2>Sign In</h2>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" class="submit-btn" name="signIn">Sign In</button>
                    <p class="helper-text">Forgot password?</a></p>
                </form>

                <!-- Sign Up Form -->
                <form id="signUpForm" class="form" method="post" action="register.php">
                    <h2>Create Account</h2>
                    <input type="text" name="fullName" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" class="submit-btn" name="signUp">Sign Up</button>
                </form>
            </div>
            <div class="separator">or</div>
            <button class="google-btn" disabled>
            <img src="google.png" alt="Google Logo">
            Continue with Google
            </button>

        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>