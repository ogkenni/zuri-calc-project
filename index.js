let currentInput = '0';

function appendValue(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearResult() {
    currentInput = '0';
    updateDisplay();
}

function backspace (){
    let expression = document.getElementById("result");
    let result = expression.value.slice(0, -1);
    document.getElementById('result').value = result

}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
