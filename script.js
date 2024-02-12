// // Add animation to header
// const header = document.getElementById('header');
// header.classList.add('animated');
// header.style.animation = 'slideIn 1s forwards';

// // Smooth scrolling effect for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Get the audio element
const clickSound = document.getElementById('clickSound');

// Get all the navigation links
const navLinks = document.querySelectorAll('#left-panel ul li a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Play the click sound
    clickSound.play();
  });
});