let number2El = document.getElementById("number2El")
let number1El = document.getElementById("number1El")
console.log(number2El)


let number1 = 12
let number2 = 5
function add1(){
    number1 += 1
    number1El.textContent = number1
    
}
function add2(){
    number1 += 2
    
    number1El.textContent = number1
    
}
function add3(){
    number1 += 3
    number1El.textContent = number1
}

function addr1(){
    number2 += 1
    
    number2El.textContent = number2
    
}
function addr2(){
    number2 += 2
    
    number2El.textContent = number2
    
}
function addr3(){
    number2 += 3
    
    number2El.textContent = number2
    
}