// Simple navigation alert (example)
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Navigating to ${link.textContent}`);
    });
  });
});