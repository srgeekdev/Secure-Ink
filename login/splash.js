 document.addEventListener("DOMContentLoaded", function() {
     // Wait for a few seconds and then hide the splash screen
     setTimeout(function() {
         const splashScreen = document.getElementById('splash-screen');
         splashScreen.classList.add('hidden'); // Add 'hidden' class to f
         // Display the main content after splash screen disappears
         document.querySelector('.main-content').style.display = 'block';
     }, 3000); // 1000ms = 1 seconds
 });


// Show splash screen and then fade it out after 2 seconds
// window.addEventListener("load", function () {
//     const splash = document.getElementById("splash-screen");
//     setTimeout(() => {
//       splash.classList.add("hidden");
//       document.querySelector(".main-content").style.display = "block";
//     }, 2000);
//   });
  