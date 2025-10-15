function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLastCharacter() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        let expression = display.value;
        
        // Replace 'x' with '*' for multiplication
        expression = expression.replace(/x/g, '*');
        
        // Evaluate the expression respecting operator precedence
        let result = eval(expression);
        
        // Display result with decimals if needed
        display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(2));
    } catch (error) {
        display.value = "Error";
    }
}