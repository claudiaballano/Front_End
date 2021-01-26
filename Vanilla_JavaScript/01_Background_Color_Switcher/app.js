let buttons = document.querySelectorAll('.button');

buttons.forEach(buttons => buttons.addEventListener('click', changeColorBackground));

function changeColorBackground(e) {
    console.log(e)
    let body = document.body
    body.style.background = (`${e.target.id}`)
}



