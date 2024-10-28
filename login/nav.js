
  // Toggle menu for mobile view
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }
  
  // Show the main content with fade-in effect
document.querySelector('.main-content').classList.add('visible');

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
    document.querySelector('.hamburger').classList.toggle('open');
}
