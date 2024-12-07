let display = document.getElementById('display');
let sciButtons = document.querySelector('.scientific-buttons');

function insert(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error,Jitendra mishra';
    }
}

function toggleScientific() {
    sciButtons.classList.toggle('hidden');
}
