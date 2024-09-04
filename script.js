function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    // Generate random number between 0 and 9 (10% chance of faulty operation)
    const faultyChance = Math.random() < 0.1;

    let result;

    if (faultyChance) {
        // Faulty operations
        switch (operation) {
            case '+':
                result = num1 - num2;
                break;
            case '-':
                result = num1 / num2;
                break;
            case '*':
                result = num1 + num2;
                break;
            case '/':
                result = Math.pow(num1, num2);  // num1 ** num2
                break;
        }
        alert("Oops! The calculator malfunctioned.");
    } else {
        // Correct operations
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
    }

    document.getElementById("result").innerText = "Result: " + result;
}