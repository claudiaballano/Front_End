// Tu código aquí

let nextButton = document.querySelector(".nextBtn")
let prevButton = document.querySelector(".prevBtn")
let mainCounter = document.querySelector('#counter')

nextButton.addEventListener('click', aumentarContador)
prevButton.addEventListener('click', descenderContador)

let counter = 0;
function aumentarContador() {
    counter++
    mainCounter.textContent = counter
    colorCounter()
}
function descenderContador() {
    counter--
    mainCounter.textContent = counter
    colorCounter()
}

function colorCounter() {
    if(counter>0){
        mainCounter.style.color='green'
    }
    else if (counter<0){
        mainCounter.style.color='red'
    }
    else{
        mainCounter.style.color='grey'
    }
}