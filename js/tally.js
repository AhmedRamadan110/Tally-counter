// The DOM
let count = document.querySelector('.tally_btn-count');
let UIcounter = document.querySelector('.tally_UIcounter');
let resetCounter = document.querySelector('.tally_reset-counter');
let counter = 0;

// Reset counter to 0
UIcounter.textContent = 0;

// Add NUMBER
count.addEventListener('click', () => {
  counter += 1;
  UIcounter.textContent = counter;
});

// Reset NUMBER
resetCounter.addEventListener('click', () => {
  counter = 0;
  UIcounter.textContent = 0;
})
