const productos = ["Saquitos masa philo", "Pulpo sobre pastel de papa", "Vieiras a la plancha sobre pure de limón y pimiento","Gyozas de rabo de toro a la cordobesa"];
const precios= [1500,2000,1800,1200];
const datosEnvioArray=[];
const pedido=[];
const cantidad=[];
const orden=[];
const montoPedido=[];
const pedidoFinal=[];
let contPedido=0;
let contCant=0; 
let aPagar=0;
let opMenu;
let opCant;
let nombrecomp;
let direccion;
let telefono;
let datoAdic;
let datosPersonales;
let index=0;
let cantFinal;

function tomarPedido (){
    
        do{
            opMenu=prompt("Bienvenidos! Que desean ordenar: 1-Saquitos masa philo  2-Pulpo sobre pastel de papa  3-Vieiras a la plancha sobre pure de limón y pimiento  4-Gyozas de rabo de toro a la cordobesa");
            if(isNaN(opMenu)){
                alert("El valor ingresado no es correcto, intente nuevamente.");
                tomarPedido();
            }
            opMenu=parseInt(opMenu);
            pedido[contPedido]=opMenu;
            contPedido=contPedido+1;
        } while(opMenu>4); 

        do{
            opCant=prompt("Cuantas porciones desea ordenar:");
            if(isNaN(opCant)){
                alert("El valor ingresado no es correcto, intente nuevamente.");
                tomarPedido();
            }
            opCant=parseInt(opCant);
            cantidad[contCant]=opCant;
            contCant=contCant+1;
        } while (opCant<1);
}
function continuarOden(){
    resp=prompt("Desea ordenar algo mas:S/N");
    resp=(resp.toUpperCase());
    while (resp==="S"){
        tomarPedido();
        resp=prompt("Desea ordenar algo mas:S/N");
        resp=(resp.toUpperCase());
    }
}

function datosEnvio(nombrecomp, direccion,telefono,datoAdic){//hacer objeto
    this.nombrecomp=nombrecomp;
    this.direccion=direccion;
    this.telefono=telefono;
    this.datoAdic=datoAdic;
}
function tomarDatos(){
    datosEnvio.nombrecomp= prompt("Por favor ingrese su nombre completo:");
    datosEnvio.direccion= prompt ("Ingrese por favor su direccion:");
    datosEnvio.telefono= prompt ("Por favor ingrese un telefono de contacto:");
    datosEnvio.datoAdic= prompt("Desea ingresar informacion adicional para la entrega del pedido:");

}
    

function validarDatos(){
    for (let i=0; i<pedido.length; i++){
        index=pedido[i];
        index=index-1;
        pedidoFinal[i]=productos[index];
        montoPedido[i]=cantidad[i]*precios[index];
        aPagar=montoPedido[i]+aPagar;
    }
}

function ordenPedido(){
    document.write("Gracias por su compra, a la brevedad llegara su pedido. Bom Apetit!  ")
    for (let i=0; i<pedidoFinal.length; i++){
        document.write(pedidoFinal[i]);
        document.write(cantidad[i],"Porciones");
        document.write("$ ",montoPedido[i]);
    }
    document.write(datosEnvio.nombrecomp);
    document.write(datosEnvio.direccion);
    document.write(datosEnvio.telefono);
    document.write(datosEnvio.datoAdic);
    document.write("Monto a pagar:$",aPagar);
}


tomarPedido();
continuarOden();
datosEnvio();
tomarDatos();
validarDatos();
ordenPedido();

