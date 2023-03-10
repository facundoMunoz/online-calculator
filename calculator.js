const currentNumber = document.getElementById('current-number');
const currentOperation = document.getElementById('current-operation');
const buttons = document.getElementsByClassName('button');

function addNumber(aNumber) {
    if (aNumber == '.') {
        if (!currentNumber.textContent.includes('.')) {
            currentNumber.textContent += aNumber;
        }
    } else {
        if (currentNumber.textContent == '0') {
            // Erase left zero
            currentNumber.textContent = '';
        }
        currentNumber.textContent += aNumber;
    }
}

function addOperation(anOperation) {
    let number = currentNumber.textContent;

    switch (anOperation) {
        case 'C':
            // Clean
            currentNumber.textContent = 0;
            currentOperation.textContent = '';
            break;
        case 'D':
            // Delete
            if (Number(currentNumber.textContent) < 10) {
                currentNumber.textContent = 0;
            } else {
                currentNumber.textContent = currentNumber.textContent.slice(0, currentNumber.textContent.length - 1);
            }
            break;
        case '=':
            // TODO: calculate method
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

function initialize() {
    for (let buttonPos = 0; buttonPos < buttons.length; buttonPos++) {
        let button = buttons[buttonPos];
        if (button.className.includes('number')) {
            button.addEventListener('click', function (e) {
                addNumber(button.textContent);
            });
        } else {
            button.addEventListener('click', function (e) {
                addOperation(button.textContent);
            });
        }
    }
}

initialize();