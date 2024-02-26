let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function botonConsole(){
    alert('El botón fue clicado');
}

function botonPrompt(){
    let ciudad = prompt("Ingrese el nombre de una ciudad de BRASIL");
    alert(`Estuve en ${ciudad} y me acorde de ti`); 
}

function botonAlert(){
    alert('Yo amo JS');
}

function botonSuma(){
    let numA = parseInt(prompt("Ingrese un numero A: "));
    let numB = parseInt(prompt("Ingrese un numero B: "));

    numC = numA + numB

    alert(`La suma de ${numA} y ${numB} es ${numC}`)

}

function saludar() {
    console.log("¡Hola, mundo!");
}

function saludarNom(cad){
    console.log(`¡Hola, ${cad}!`);
}

function doblar(num){
    return parseInt(2*num);
}

function promedio(a,b,c){
    return (a+b+c)/3;
}

function mayor(a,b){
    return a > b ? a : b;
}

function cuadrado(a){
    return a * a;
}

saludar();

saludarNom("Antonio");

let num2 = doblar(2);
console.log(num2)

let num3 = promedio(4,5,6);
console.log(num3)

let num4 = mayor(12,25);
console.log(num4)

let num5 = cuadrado(10);
console.log(num5)