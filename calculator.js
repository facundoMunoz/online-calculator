const currentNumber = document.getElementById('current-number');
const currentOperation = document.getElementById('current-operation');
const buttons = document.getElementsByClassName('button');
const snarkyMessage = 'Very funny';

function addNumber(aNumber) {
    if (currentNumber.textContent == snarkyMessage) {
        // Reset text
        currentNumber.textContent = 0;
    }
    if (aNumber == '.') {
        if (!currentNumber.textContent.includes('.')) {
            // If it's a dot and it doesn´t have one already
            currentNumber.textContent += aNumber;
        }
    } else if (currentNumber.textContent.length < 6){
        if (currentNumber.textContent == '0') {
            // Erase left zero
            currentNumber.textContent = '';
        }
        currentNumber.textContent += aNumber;
    }
}

function newOperation(anOperation) {
    if (currentNumber.textContent == snarkyMessage) {
        // Reset text
        currentNumber.textContent = 0;
    }
    switch (anOperation) {
        case 'C':
            // Clean
            currentNumber.textContent = 0;
            currentOperation.textContent = '';
            break;
        case 'D':
            // Delete
            if (currentNumber.textContent.length == 1) {
                currentNumber.textContent = 0;
            } else {
                currentNumber.textContent = currentNumber.textContent.slice(0, currentNumber.textContent.length - 1);
            }
            break;
        case '=':
            if (currentOperation.textContent != '') {
                operate(Number(currentOperation.textContent.slice(0, currentOperation.textContent.length - 1)),
                    currentOperation.textContent.slice(currentOperation.textContent.length - 1, currentOperation.textContent.length),
                    Number(currentNumber.textContent));
            }
            break;
        default:
            if (currentOperation.textContent == '') {
                currentOperation.textContent = currentNumber.textContent + anOperation;
                currentNumber.textContent = 0;
            } else {
                currentOperation.textContent = currentOperation.textContent.slice(0, currentOperation.textContent.length - 1) + anOperation;
            }
            break;
    }
}

function operate(firstNumber, operationString, secondNumber) {
    currentOperation.textContent = '';
    switch (operationString) {
        case '%':
            if (secondNumber == 0) {
                currentNumber.textContent = 0;
            } else {
                currentNumber.textContent = firstNumber % secondNumber;
            }
            break;
        case '/':
            if (secondNumber == 0) {
                currentNumber.textContent = snarkyMessage;
            } else {
                currentNumber.textContent = firstNumber / secondNumber;
            }
            break;
        case '*':
            currentNumber.textContent = (firstNumber * secondNumber);
            break;
        case '-':
            currentNumber.textContent = firstNumber - secondNumber;
            break;
        case '+':
            currentNumber.textContent = firstNumber + secondNumber;
            break;
    }
}

function initialize() {
    for (let buttonPos = 0; buttonPos < buttons.length; buttonPos++) {
        let button = buttons[buttonPos];
        if (button.className.includes('number')) {
            // It's a number button
            button.addEventListener('click', function (e) {
                addNumber(button.textContent);
            });
        } else {
            // It's an operation button
            button.addEventListener('click', function (e) {
                newOperation(button.textContent);
            });
        }
    }
}

initialize();