
let balloon = document.querySelectorAll('.balloon');
let ballonGallery=document.querySelector('#balloon-gallery')
let finalText=document.querySelector('#yay-no-balloons')
let counter=0;

balloon.forEach(balloon => balloon.addEventListener('mouseover', burstBalloon));

function burstBalloon(e){
e.target.textContent = "POP";
e.target.style.background = "none";
counter++
console.log(counter)
if(counter==24){
    finalText.style.display="block"
    ballonGallery.style.display="none"

}
e.target.removeEventListener('mouseover',burstBalloon)
//
}



//# BONUS
//1. Implementa un contador que te diga cuantos globos quedan por explotar.

//2. Implementa un botón de **reset** que reinicie el estado de todos los globos a inflado. NO se puede recargar la página!

//3. Implementa una funcionalidad __inflar__, que permita, al hacer **doble click** en un "POP!", volver a inflar el globo. Actualiza el contador! 

//Mira como ha resuelto el autor el proyecto para comparar soluciones, ya que lo aborda de manera totalmente distinta.


