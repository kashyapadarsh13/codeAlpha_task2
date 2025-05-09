let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        display.classList.add("result-animation");
        setTimeout(() => display.classList.remove("result-animation"), 500);
    } catch (error) {
        display.value = "Error";
    }
}

/* Animated result effect */
document.getElementById("display").addEventListener("animationend", function() {
    this.style.color = "#2ecc71";
});

/* CSS animation effect for result */
document.styleSheets[0].insertRule(`
    .result-animation {
        animation: fadeIn 0.5s ease-in-out;
    }
`, 0);