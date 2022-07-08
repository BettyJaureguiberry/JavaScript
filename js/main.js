let numero1 = 0;
let numero2= 1;
const espiral=[];
const valor1=0;
const valor2=1;

let cantidad= prompt ("Por favor ingrese la cantidad de valores que quiere conocer de la espiral de Fibonacci:");

for ( let i=0; i<(cantidad-2); i++){
    let rdo= numero1 + numero2;
    espiral[i]=rdo; 
    numero1=numero2;
    numero2=rdo;
}
document.write (valor1+ ","+ valor2+ "," +espiral);