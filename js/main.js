const productos = ["Saquitos masa philo", "Pulpo sobre pastel de papa", "Vieiras a la plancha sobre pure de limón y pimiento","Gyozas de rabo de toro a la cordobesa"];
const precios= [1500,2000,1800,1200];
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
            pedido.push(opMenu);
        } while(opMenu>4); 

        do{
            opCant=prompt("Cuantas porciones desea ordenar:");
            if(isNaN(opCant)){
                alert("El valor ingresado no es correcto, intente nuevamente.");
                tomarPedido();
            }
            opCant=parseInt(opCant);
            cantidad.push(opCant);
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
class datosEnvio{
    constructor(nombrecomp, direccion,telefono, datoAdic){
        this.nombrecomp=nombrecomp;
        this.direccion=direccion;
        this.telefono=telefono;
        this.datoAdic=datoAdic;
    }
    mostrar(){
        document.write(this.nombrecomp);
        document.write(this.direccion);
        document.write(this.telefono);
        document.write(this.datoAdic);
    }
}

function tomarDatos(){
    const nombre= prompt("Por favor ingrese su nombre completo:");
    const direc= prompt ("Ingrese por favor su direccion:");
    const tel= prompt ("Por favor ingrese un telefono de contacto:");
    const datoAdicional= prompt("Desea ingresar informacion adicional para la entrega del pedido:");
    return new datosEnvio(nombre, direc, tel, datoAdicional);
    
}
    

function validarDatos(){
    for (let i=0; i<pedido.length; i++){
        index=pedido[i];
        index=index-1;
        pedidoFinal[i]=productos[index];
        montoPedido[i]=cantidad[i]*precios[index];
        
    }
    aPagar=montoPedido.reduce((acumulador, elemento)=>acumulador+elemento,0);
}

function ordenPedido(){
    document.write("Gracias por su compra, a la brevedad llegara su pedido. Bom Apetit!  ")
    for (let i=0; i<pedidoFinal.length; i++){
        document.write(pedidoFinal[i]);
        document.write(cantidad[i],"Porciones");
        document.write("$ ",montoPedido[i]);
    }
    datos.mostrar();
    document.write("Monto a pagar:$",aPagar);
}


tomarPedido();
continuarOden();
const datos = tomarDatos();
validarDatos();
ordenPedido();

