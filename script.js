/* --- Part 2: JavaScript Functions --- */
let currentColor = 'white';

function changeColor(newColor) {
  const body = document.body; // local variable
  body.style.backgroundColor = newColor;
  currentColor = newColor; // global variable updated
  updateColorText(currentColor);
  return currentColor;
}

function updateColorText(color) {
  const p = document.getElementById('current-color');
  p.textContent = `Current Background Color: ${color}`;
}

/* --- Part 3: CSS + JS Animations --- */
function toggleAnimation() {
  const box = document.querySelector('.box');
  box.classList.toggle('animate');
}

document.getElementById('animate-btn').addEventListener('click', toggleAnimation);


// Toggle About Section Visibility
const toggleBtn = document.getElementById('toggle-about-btn');
const aboutSection = document.getElementById('about');

toggleBtn.addEventListener('click', () => {
  if (aboutSection.style.display === 'none') {
    aboutSection.style.display = 'block';
    toggleBtn.textContent = 'Hide About Me';
  } else {
    aboutSection.style.display = 'none';
    toggleBtn.textContent = 'Show About Me';
  }
});