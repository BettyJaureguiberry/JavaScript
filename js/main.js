const pedidoFinales=[];
let aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento,0);
document.getElementById("carrito-total").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;


const productos = [
    {
        id:1,
        title:"Saquitos masa philo",
        price:1500,
        img: "imagenes/saquitos.jpg",
    },
    {
        id:2,
        title:"Pulpo sobre pastel de papa",
        price:2000,
        img: "imagenes/polposutortinodipatate.jpg"
    },
    {
        id:3,
        title:"Vieiras a la plancha sobre pure de limón y pimiento",
        price:1800,
        img: "imagenes/vieirassobrepure.jpg",
    },
    {
        id:4,
        title:"Gyozas de rabo de toro a la cordobesa",
        price:1200,
        img:"imagenes/gyozas.jpg",
}];
const pedido=[];
const cantidad=[];
const orden=[];
const montoPedido=[];


let contPedido=0;
let contCant=0; 
let opMenu;
let opCant;
let index=0;
let cantFinal;

productos.forEach ((producto) => {
    const idBoton=`add-cart${producto.id}`
    document.getElementById("cards").innerHTML +=
        ` 
        <div class="">
                    <div class="col mb-5 producto">
                        <div id="id"+${producto.id} class="card h-100 productoId">
                            <!-- Product image-->
                            <img class="card-img-top productoImg" src=${producto.img} alt=${producto.title}>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder productoTitulo">${producto.title}.</h5>
                                    <!-- Product price-->
                                    <p class="productoPrecio">${producto.price}</p>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <button id="${idBoton}" data-id="${producto.id}  class="btn btn-outline-dark mt-auto productoBoton"  href="#">Ordenar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>  
        `
    });


productos.forEach((producto)=>{
    const idBoton=`add-cart${producto.id}`
    document.getElementById(idBoton).addEventListener('click', ()=> {
    pedidoFinales.push(producto);
    aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento,0);//No me esta sumando
    console.log(pedidoFinales);
    pedidoFinales.forEach((producto)=> {
        document.getElementById("carrito").innerHTML += `${producto.title} - ${producto.price}`});
    mostrarIngCarrito(producto.title);
    document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
    })
});

function mostrarIngCarrito (tituloProd){
    alert ("Se ingreso al pedido:"+tituloProd);
};








/*function tomarPedido (){
            opMenu=prompt("Bienvenidos! Que desean ordenar: 1-Saquitos masa philo  2-Pulpo sobre pastel de papa  3-Vieiras a la plancha sobre pure de limón y pimiento  4-Gyozas de rabo de toro a la cordobesa");
            if(isNaN(opMenu) || opMenu>4){
                alert("El valor ingresado no es correcto, intente nuevamente.");
                tomarPedido();
            }
            opMenu=parseInt(opMenu);
            pedido.push(opMenu);

            opCant=prompt("Cuantas porciones desea ordenar:");
            if(isNaN(opCant) || opCant<1){
                alert("El valor ingresado no es correcto, intente nuevamente.");
                tomarPedido();
            }
            opCant=parseInt(opCant);
            cantidad.push(opCant);
};
function continuarOden(){
    resp=prompt("Desea ordenar algo mas:S/N");
    resp=(resp.toUpperCase());
    while (resp==="S"){
        tomarPedido();
        resp=prompt("Desea ordenar algo mas:S/N");
        resp=(resp.toUpperCase());
    }
}*/
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

/*function tomarDatos(){
    const nombre= prompt("Por favor ingrese su nombre completo:");
    const direc= prompt ("Ingrese por favor su direccion:");
    const tel= prompt ("Por favor ingrese un telefono de contacto:");
    const datoAdicional= prompt("Desea ingresar informacion adicional para la entrega del pedido:");
    return new datosEnvio(nombre, direc, tel, datoAdicional);
    
}
    

function validarDatos(){
    for (let i=0; i<pedido.length; i++){
        index=pedido[i];
        pedidoFinal[i]=productos[index];
        montoPedido[i]=cantidad[i]*productos.price[index];
        console.log(pedidoFinal[i]);
        console.log(montoPedido[i]);
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


/*tomarPedido();
continuarOden();
const datos = tomarDatos();
validarDatos();
ordenPedido();*/


