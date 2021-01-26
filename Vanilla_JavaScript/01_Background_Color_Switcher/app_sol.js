// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Para cada botón del array 'buttons', invocamos a la función 'addButtonListener'
buttons.forEach(addButtonListener);

// Función invocada por forEach, también llamada, función de 'callback'. Esta función va a ser invocada tantas veces como elementos contenga el array 'buttons'. El parámetro "button" es siempre un elemento del array 'buttons'
function addButtonListener(button) {
    button.addEventListener('click', (e) => {

        // 'e' es el objeto Event. Concretamente , ClickEvent. Tiene una propiedad de nombre 'target', que nos indica el elemento HTML sobre el que se ha producido el evento (en este caso, sonbre quien hemos hecho clic). Dicho elemento, tiene una propiedad 'id' con valor, puesto que su elemento correspondiente HTML <button>, también lo tiene
        body.style.backgroundColor = e.target.id

        // Una forma alternativa de hacerlo:
        // body.style.backgroundColor = e.target.backgroundColor
    })
}