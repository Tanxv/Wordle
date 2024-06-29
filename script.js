console.log("hello");
//Parametros
let intentos = 6;
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
//api
// Fetch random word from API
fetch("https://random-word.ryanrk.com/api/en/word/random/?Length=5")
  .then(response => response.json())
  .then(response =>{
    console.log(response)
    palabra = response[0].toUpperCase();
  });

/**
 * Funcion Principal del Script, permite jugar a adivinar 
 * @returns 
 */
function intentar(){
    console.log("Intento!")
    const INTENTO = leerIntento();

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } 
        else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } 
        else {
            console.log(INTENTO[i], "GRIS");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)   
		intentos--
    if(intentos==0){
      terminar("<h1>PERDISTE!😖</h1>")
    }
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    
}
/**
 * Funcion que imprime cada intento por consola
 * @returns 
 */
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
/**
 * Funcion para dejar un mensaje al terminar la partida
 * @param {*} mensaje 
 */
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    let mensajeElement = document.createElement('div');
    contenedor.innerHTML = mensaje;
    contenedor.appendChild(mensajeElement);
}