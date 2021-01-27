// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
    console.log(jokeDIV.innerHTML)
})

// El código asíncrono puede ser gestionado dentro de una función con la directiva 'async'
async function getRandomJoke(){
    const url = 'https://api.chucknorris.io/jokes/random'

    // la directiva 'await' espera a que se acabe la función asíncrona invocada. Hasta que no se acabe, no se ejecutará la siguiente instrucción
    let response = await fetch(url)
    let data = await response.json()
    updateDOM(data)
}

function updateDOM(data) {
    jokeDIV.innerHTML = data.value
}

function onerror(){
     jokeDIV.textContent = 'There was an error!';  
}
