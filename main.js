const numberButtons = document.querySelectorAll('[data-number')
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
       console.log('clicked')
    })
})

const operationButtons = document.querySelectorAll('[data-operation]')
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
       console.log("clicked")
    })
})
const equalsButtons = document.querySelector('[data-equals]')
    equalsButtons.addEventListener('click', () => {
       console.log("clicked")
    })

const deleteButtons = document.querySelector('[data-delete]')
deleteButtons.addEventListener('click', () => {
       console.log("clicked")
    })

const allClearButtons = document.querySelector('[data-all-clear]')
allClearButtons.addEventListener('click', () => {
       console.log("clicked")
    })



/*let calculator = document.querySelector("#calculator")
console.log(calculator)

calculator.addEventListener("click", function(event){
    console.log("clicked")
})*/