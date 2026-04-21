const MIN_VALUE = 0;
const MAX_VALUE = 10;

const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let value = 1;

function updateDisplay() {
  counterValue.textContent = value;
  increaseBtn.disabled = value >= MAX_VALUE;
  decreaseBtn.disabled = value <= MIN_VALUE;
}

increaseBtn.addEventListener('click', () => {
  if (value < MAX_VALUE) {
    value += 1;
    updateDisplay();
  }
});

decreaseBtn.addEventListener('click', () => {
  if (value > MIN_VALUE) {
    value -= 1;
    updateDisplay();
  }
});

updateDisplay();