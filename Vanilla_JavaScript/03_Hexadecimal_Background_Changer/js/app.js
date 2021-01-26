// Recuperamos el botón del DOM

// Obtengo el botón del DOM mediante querySelector. Selector CSS: #btn, pues tiene el HTML tag tiene un id="btn"
let button = document.querySelector('#btn')

// Añadimos un listener. Cuando el botón reciba un evento 'click', ejecutamos la función 'changeBodyBackgroundColor'
button.addEventListener('click', changeBodyBackgroundColor)


function changeBodyBackgroundColor() {
    let hexColor = generateRandomHexColor()
    document.body.style.backgroundColor = hexColor
    
    let hexText = document.querySelector('#hex-value')
    hexText.textContent = " " + hexColor
}

function generateRandomHexColor() {
    // Todos los valores posibles que puede tener un dígito hexadecimal
    let hexadecimalValues = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // El número máximo de dígitos de un color en hexadecimal. Fíjate que utilizamos la palabra 'const', pues es un valor que nunca va a cambiar
    const hexDigits = 6
    // Según la especificación de CSS, los colores hexadecimales tienen el formato '#123456'
    let hexColor = '#'

    // Este bucle se ejecuta 6 veces. Construimos carácter a carácter el color hexadecimal
    for (let i=0; i<hexDigits; i++) {
        
        hexColor = hexColor + getRandomValueFromArray(hexadecimalValues)
    }

    return hexColor
}

    function getRandomValueFromArray(arr) {
        let numElements = arr.length
        let randomIndex = Math.floor(Math.random() * numElements)
    
        return arr[randomIndex]
    }