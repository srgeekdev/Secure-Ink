const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

// Toggle between Sign In and Sign Up
signInBtn.addEventListener('click', () => {
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');
});

document.getElementById('googleSignUp').addEventListener('click', function() {
    // Logic to handle Google OAuth sign up
    window.location.href = '/auth/google'; // Redirect to your OAuth endpoint
});

