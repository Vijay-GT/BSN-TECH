// Get the hamburger icon and the navbar menu
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');

// Add an event listener to the hamburger to toggle the 'active' class
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active'); // This will show/hide the menu
});
