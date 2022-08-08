
const prodCarrito=JSON.parse(localStorage.getItem("carrito"));
const pedidoFinales=prodCarrito;
const tcarrito=localStorage.getItem('carrito');
document.getElementById("carTotalEncabezado").innerHTML= tcarrito;
aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.price,0);
document.getElementById("carTotalEncabezado").innerHTML = pedidoFinales.length + "- $" + aPagar;

//Declaracion de variables



const productos = [
    {
        id:1,
        title:"Saquitos masa philo",
        price:1500,
        img: "imagenes/saquitos.jpg",
        cantidad:1,
        monto:0,
    },
    {
        id:2,
        title:"Pulpo sobre pastel de papa",
        price:2000,
        img: "imagenes/polposutortinodipatate.jpg",
        cantidad:1,
        monto:0,
    },
    {
        id:3,
        title:"Vieiras a la plancha sobre pure de limón y pimiento",
        price:1800,
        img: "imagenes/vieirassobrepure.jpg",
        cantidad:1,
        monto:0,
    },
    {
        id:4,
        title:"Gyozas de rabo de toro a la cordobesa",
        price:1200,
        img:"imagenes/gyozas.jpg",
        cantidad:1,
        monto:0,
}];
const pedido=[];
const cantidad=[];
const orden=[];

let contPedido=0;
let contCant=0; 
let opMenu;
let opCant;
let index=0;
let cantFinal;
const nombre ="";
const direccion ="";
const email="";
const telefono="";
const mensaje="";
const mostrarErrores="";

//Creamos las cards
productos.forEach ((producto) => {
    const idBoton=`add-cart${producto.id}`
    document.getElementById("cards").innerHTML +=
        ` 
        <div class="">
                    <div class="col mb-5 producto">
                        <div id="id${producto.id}" class="card h-100 productoId">
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
                                    <button id="${idBoton}" data-id="${producto.id}"  class="btn btn-outline-dark mt-auto productoBoton"  href="#">Ordenar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>  
        `
    });

carritoStorage();
productos.forEach((producto)=>{
    const idBoton=`add-cart${producto.id}`
    document.getElementById(idBoton).addEventListener('click', ()=> {
        pedidoFinales.push(producto);
        localStorage.setItem("tcarrito", JSON.stringify(tcarrito));
        mostrarIngCarrito(producto);
        calcularCarrito(producto.price);
    });
});

function carritoStorage(){
    document.getElementById("itemsCarrito").innerHTML ="";
    calcularCarrito();
    pedidoFinales.forEach((pedidoFinal)=>{
        document.getElementById("itemsCarrito").innerHTML += `
                <tr>
                    <th scope="row">${pedidoFinal.id}</th>
                    <td>${pedidoFinal.title}</td>
                    <td>${pedidoFinal.cantidad}</td>
                    <td>${pedidoFinal.price}</td>
                    <td><button onclick='eliminarDelCarrito("${pedidoFinal.id}")' id="${pedidoFinal.id}"  class="btn btn-danger" width=10px>X</button></td>
                </tr>`;
                document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
                document.getElementById("carTotalEncabezado").innerHTML= pedidoFinales.length + "- $" + aPagar;

});
    carritoPop();    
};

//CALCULA CANTIDAD Y MONTO A PAGAR
function calcularCarrito(){
    aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.price,0);
    localStorage.setItem("tcarrito",JSON.stringify(pedidoFinales));
};

//MUESTRA LO CARGADO EN EL CARRITO
function mostrarIngCarrito(pedidoFinales){  
    calcularCarrito();
    
    document.getElementById("itemsCarrito").innerHTML += `
                <tr>
                    <th scope="row">${pedidoFinales.id}</th>
                    <td>${pedidoFinales.title}</td>
                    <td>${pedidoFinales.cantidad}</td>
                    <td>${pedidoFinales.price}</td>
                    <td><button onclick='eliminarDelCarrito("${pedidoFinales.id}")' id="${pedidoFinales.id}"  class="btn btn-danger" width=10px>X</button></td>
                </tr>`;
    document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
    document.getElementById("carTotalEncabezado").innerHTML= pedidoFinales.length  + "- $" + aPagar;
    carritoPop(pedidoFinales);


    
};

function carritoPop(){
    console.log ("aca estoy");
    pedidoFinales.forEach((pedidoFinal) => {  
    document.getElementById("itemsPOP").innerHTML += `
                <tr>
                    <th scope="row">${pedidoFinal.id}</th>
                    <td>${pedidoFinal.title}</td>
                    <td>${pedidoFinal.cantidad}</td>
                    <td>${pedidoFinal.price}</td>
                    <td><button onclick='eliminarDelCarrito("${pedidoFinal.id}")' id="${pedidoFinal.id}"  class="btn btn-danger" width=10px>X</button></td>
                </tr>
                <tr>
                    <th scope="row">${nombre}</th>
                    <td>${direccion}</td>
                    <td>${email}</td>
                    <td>${telefono}</td>
                    <td>${mensaje}</td>
                `;
    document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
    document.getElementById("carTotalEncabezado").innerHTML= pedidoFinales.length + "- $" + aPagar;
});
};

document.getElementById("botonCarrito").addEventListener('click', ()=> {
    console.log ("botonCarrito");
    carritoPop();
});

//MUESTRA EL CARRITO DESPUES DE ELIMIAR UN ITEMS
function reescribirIngCarrito(pedidoFinales){ 
    document.getElementById("itemsCarrito").innerHTML ="";
    calcularCarrito();
    pedidoFinales.forEach((pedidoFinal)=>{
        document.getElementById("itemsCarrito").innerHTML += `
                <tr>
                    <th scope="row">${pedidoFinal.id}</th>
                    <td>${pedidoFinal.title}</td>
                    <td>${pedidoFinal.cantidad}</td>
                    <td>${pedidoFinal.price}</td>
                    <td><button onclick='eliminarDelCarrito("${pedidoFinal.id}")' id="${pedidoFinal.id}"  class="btn btn-danger" width=10px>X</button></td>
                </tr>`;
                document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
                document.getElementById("carTotalEncabezado").innerHTML= pedidoFinales.length  + "- $" + aPagar;
                

});
    carritoPop();    
};

//ELIMINAR DEL CARRITO
function eliminarDelCarrito(productoid){
    const ped=pedidoFinales.find((productos) => (productos.id)== productoid);
    console.log(ped);
    
    const index = pedidoFinales.indexOf(ped);
    console.log(index);
    if (index !=-1){
        pedidoFinales.splice(index, 1);
    };
    reescribirIngCarrito(pedidoFinales);
    calcularCarrito();
    
}

//FORMULARIO DATOS ENVIO
nombre=document.getElementById("nombre");
direccion=document.getElementById("apellido");
email=document.getElementById("email");
telefono=document.getElementById("telefono");
mensaje=document.getElementById("mensaje");
mostrarErrores=document.getElementById("errores");
let mal="";
    nombre.addEventListener('change', () => {
        if(nombre.value.length < 5){
            mal = 'El nombre no es valido';
            mostrarErrores.innerHTML = mal;
            }
        });
    direccion.addEventListener('change', () => {
        if (direccion.value.length<5){
            mal = 'La direccion no es valido';
            mostrarErrores.innerHTML = mal;
            }
        });
    email.addEventListener('change', () => {
        let emailOk=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailOk.test(email.value)){
            mal = 'El mail no es valido';
            mostrarErrores.innerHTML = mal;
            }
        });
    telefono.addEventListener('change', () => {
        if (isNaN(telefono)){
            mal = 'El telefono no es valido';
            mostrarErrores.innerHTML = mal;
            }
        });

document.getElementById("botonEnviar").addEventListener('click', () => {
    carritoPop();
    alert("Pedido Enviado");
});
    


/*class datosEnvio{
    constructor(nombrecomp, direccion,telefono, datoAdic){
        this.nombrecomp=nombrecomp;
        this.direccion=direccion;
        this.telefono=telefono;
        this.datoAdic=datoAdic;
    };
};*/
