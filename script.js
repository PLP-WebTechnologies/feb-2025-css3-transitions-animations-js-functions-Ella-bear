// --- Local Storage for Dark Mode ---
const body = document.body;
const toggleBtn = document.getElementById('toggleModeBtn');
// Load preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
}
// Toggle and store preference
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
});

// --- Animation Trigger ---
const img = document.getElementById('sunset');
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', () => {
  img.classList.remove('animated');
  
  // Force reflow to restart animation
  void img.offsetWidth;
  img.classList.add('animated');
});
