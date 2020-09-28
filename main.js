class Calculator {
    //Pascal Notation: Calculator
    constructor(previousItem, currentItem) {
        this.previousItem = previousItem
        this.currentItem = currentItem
        this.clear()
    }

    clear() {
        this.curOp = ''
        this.preOp = ''
        this.op = ''
        //using dot notation to set these new properties in the constructor
    }

    delete() {
        this.curOp = this.curOp.toString().slice(0, -1)
        //converting operand to string to delete the digits one by one. using slice(0,-1) zero means the first digit you encounter and -1 means start from the end of the string.
    }

    appendNumber(number) {
        if (number === '.' && this.curOp.includes('.')) return
            // if the button pressed is the decimal point and the current operand already has a decimal point, basically just stop there. don't add another decimal point
        this.curOp = this.curOp.toString() + number.toString()
            //converting operand to string to add digits to the string one by one
    }

    chooseOperation(op) {
        if (this.curOp === '') return
        // if current operand is blank then stop.
        if (this.preOp !== '') {
            this.compute()
            //if current operand is not blank move on to compute function
        }
        this.op = op
        this.preOp = this.curOp
        this.curOp = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.preOp)
        const current = parseFloat(this.curOp)
        //parsefloat takes a string and returns a number if the string starts with a number
        if (isNaN(prev) || isNaN(current)) return
        //if the const pre or const current is not a number stop. other wise move on to this switch statement below.
            switch (this.op) {
                case '+':
                    //when operation is plus do this
                    computation = prev + current
                    break
                case '-':
                    //when operation is minus do this
                    computation = prev - current
                    break
                case '*':
                    //when operation is mult do this
                    computation = prev * current
                    break
                case '÷':
                    //when operation is divide do this
                    computation = prev / current
                    break
                default:
                    return 
            }
        this.curOp = computation
        this.op = undefined
        this.preOp = ''
    }

    updateDisplay() {
        this.currentItem.innerText = this.curOp
        this.previousItem.innerText = this.preOp
        //innerText takes the inner text of an element
    }
}

let dataNumber = document.querySelectorAll('[data-number]')
dataNumber.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

/*for (number of dataNumber) {
    number.addEventListener("click", function(event) {
        console.log(number)
        
    })
}*/

let dataOperand = document.querySelectorAll('[data-operand]')
dataOperand.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})
/*for (operand of dataOperand) {
    operand.addEventListener("click", function(event) {
        console.log(dataOperand.innerText)
    })
}*/

let dataEquals = document.querySelectorAll('[data-equals]')
dataEquals.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.compute()
        calculator.updateDisplay()
    
    })
})
/*for (equals of dataEquals) {
    equals.addEventListener("click", function(event) {
        console.log("clicked")
    })
}*/

let dataAllClear = document.querySelectorAll('[data-all-clear]')
dataAllClear.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.clear()
        calculator.updateDisplay()    
    })
})
/*for (allClear of dataAllClear) {
    allClear.addEventListener("click", function(event) {
        console.log("clicked")
    })
}*/

let dataDelete = document.querySelectorAll('[data-delete]')
dataDelete.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.delete()
        calculator.updateDisplay()
    
    })
})
/*for (del of dataDelete) {
    del.addEventListener("click", function(event) {
        console.log("clicked")
    })
}*/

const previousItem = document.querySelector('[data-previous-item]')
const currentItem = document.querySelector('[data-current-item]')

const calculator = new Calculator(previousItem, currentItem)
//initializes the constructor