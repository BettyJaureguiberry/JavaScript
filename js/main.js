const productos = ["Saquitos masa philo", "Pulpo sobre pastel de papa", "Vieiras a la plancha sobre pure de limón y pimiento","Gyozas de rabo de toro a la cordobesa"];
const precios= [1500,2000,1800,1200];
let pedido;
let cantidad;
let aPagar;
let nombrecomp;
let direccion;
let telefono;
let datoAdic;
let orden;
let datosPersonales;
let pedidoFinal;
let cantFinal;

function tomarPedido (){
    do{
        pedido=prompt("Bienvenidos! Que desean ordenar: 1-Saquitos masa philo  2-Pulpo sobre pastel de papa  3-Vieiras a la plancha sobre pure de limón y pimiento  4-Gyozas de rabo de toro a la cordobesa");
    } while (pedido>4); 

    do{
        cantidad=prompt("Cuantas porciones desea ordenar:");
    } while (cantidad<0);
}


function datosEnvio(){
    nombrecomp = prompt("Por favor ingrese su nombre completo:");
    direccion =prompt ("Ingrese por favor su direccion:");
    telefono= prompt ("Por favor ingrese un telefono de contacto:");
    datoAdic=prompt("Desea ingresar informacion adicional para la entrega del pedido:");
}

function ordenPedido(){
    document.write("Gracias por su compra, a la brevedad llegara su pedido. Bom Apetit!  ")
    document.write(orden);
    document.write(" $",cantidad * precios[pedido]);
    document.write(datosPersonales);
}

function validarDatos(){
    orden= productos[pedido] + " " + cantidad;
    datosPersonales= nombrecomp + " " + direccion + " " + telefono + " " + datoAdic;
}
tomarPedido();
datosEnvio();
validarDatos();
ordenPedido(orden, aPagar, datosPersonales);
