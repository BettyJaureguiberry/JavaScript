
const pedidoFinales=JSON.parse(localStorage.getItem("tcarrito")) ?? [];
//document.getElementById("carTotalEncabezado").innerHTML= pedidoFinales;
aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.price,0);
document.getElementById("carTotalEncabezado").innerHTML = pedidoFinales.length + "- $" + aPagar;

//Declaracion de variables

let mensajeControl="";
let ped=true;

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

productos.forEach(producto => {
    const {price}=producto;
    console.log(price);
});
    



//cards
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

    //para que se vea el carrito gardado
carritoStorage();

//agregamos prod al pedido
productos.forEach((producto)=>{
    const idBoton=`add-cart${producto.id}`
    document.getElementById(idBoton).addEventListener('click', ()=> {
        //pedidoFinales.push(producto);
        mostrarIngCarrito(producto);
        calcularCarrito(producto.price);
    });
});


//funcion para mostrar el carrito
function carritoStorage(){
    document.getElementById("itemsCarrito").innerHTML ="";
    calcularCarrito();
    pedidoFinales.forEach((pedidoFinales)=>{
        document.getElementById("itemsCarrito").innerHTML += lineasCarrito (pedidoFinales);


});
    //carritoPop();    
};

function lineasCarrito (productos){
    return `
    <tr>
        <th scope="row">${productos.id}</th>
        <td>${productos.title}</td>
        <td>${productos.cantidad}</td>
        
        <td>${productos.price}</td>
        <td><button onclick='eliminarDelCarrito("${productos.id}")' id="${productos.id}"  class="btn btn-danger" width=10px>X</button></td>
    </tr>`;
};

//<td><input type="number" name="porcion" class="cantPorc" id="${productos.id}" ></td>

function calcularCarrito(){
    aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.price,0);
    document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
    document.getElementById("carTotalEncabezado").innerHTML= pedidoFinales.length + "- $" + aPagar;
    localStorage.setItem("tcarrito",JSON.stringify(pedidoFinales));
};


//MUESTRA LO CARGADO EN EL CARRITO
function mostrarIngCarrito(productos){ 
    const ped=pedidoFinales.find((productos) => (productos.id)== productos);
    console.log("ped",ped);
    
    if (ped == undefined){
        calcularCarrito();
        document.getElementById("itemsCarrito").innerHTML += lineasCarrito (productos);
        pedidoFinales.push(productos);
        console.log(pedidoFinales);
        
    }else { 
            const index = pedidoFinales.indexOf(ped);
            console.log("index", index);
            if (index !=-1){
                const p= ped.cantidad+1 ;
                console.log("cambios en cant",p);
            };
        calcularCarrito();
        document.getElementById("itemsCarrito").innerHTML += lineasCarrito (productos);
        
    }
    
};

//
function carritoPop(){
    document.getElementById("itemsPOP").innerHTML ="";
    document.getElementById("datosPedido").innerHTML ="";
    pedidoFinales.forEach((pedidoFinales) => {  
    document.getElementById("itemsPOP").innerHTML += lineasCarrito (pedidoFinales);
    });
    
    document.getElementById("datosPedido").innerHTML += `
                    <p>${nombre.value} - ${direccion.value} <br/></p>
                    <p>${telefono.value} - ${mensaje.value}<br/></p>
                    `;
    
};


document.getElementById("botonCarrito").addEventListener('click', ()=> {
    console.log ("botonCarrito");
    carritoPop();
});

//muestra modificado el pedido despues de borrar un items
function reescribirIngCarrito(pedidoFinales){ 
    document.getElementById("itemsCarrito").innerHTML ="";
    document.getElementById("itemsPOP").innerHTML ="";
    document.getElementById("errores").innerHTML ="";
    pedidoFinales.forEach((pedidoFinales)=>{
        document.getElementById("itemsCarrito").innerHTML += lineasCarrito (pedidoFinales);
                calcularCarrito();

});
};

//borrando items del pedido
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
    carritoPop();
    
}

//FORMULARIO DATOS ENVIO, no se porque no me funciona la validacion :(
const nombre=document.getElementById("nombre");
const direccion=document.getElementById("apellido");
const email=document.getElementById("email");
const telefono=document.getElementById("telefono");
const mensaje=document.getElementById("mensaje");
const mostrarErrores=document.getElementById("errores");
let mal="";
    nombre.addEventListener('change', () => {
        nombre.value.length < 5 ? mostrarErrores.innerHTML += 'El nombre no es valido <br/>' : "";
        nombre.value.length < 5 ? mal="uno" : "";
        
        });
    direccion.addEventListener('change', () => {
        direccion.value.length<5 ? mostrarErrores.innerHTML += 'La direccion no es valido <br/>' : "";
        direccion.value.length<5 ? mal = "uno" : "";
        });
    email.addEventListener('change', () => {
        let emailOk=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        !emailOk.test(email.value) ? mostrarErrores.innerHTML +='El mail no es valido <br/>' : "";
        !emailOk.test(email.value) ? mal= "uno" : ""; 
        return mal;
        });

    telefono.addEventListener('change', () => {
        isNaN(telefono) ? mal="uno" : "";
        isNaN(telefono) ? mostrarErrores.innerHTML += 'El telefono no es valido <br/>' : "";
        return mal; 
        });

document.getElementById("botonEnviar").addEventListener('click', () => {
    console.log("botonenviar");
    if(mal==="uno"){
        mensajeControl += "Por Favor ingrese nuevamente los datos de envio. <br/> ";
        document.getElementById("errores").innerHTML += 
        `<div id="alertaErrores" class="alert alert-danger" role="alert">
                ${mensajeControl}         
        </div>`
    }
    if(pedidoFinales.length===0){
        mensajeControl +="No ingreso ningun producto al pedido. Por favor controle su pedido. Muchas Gracias!";
        document.getElementById("errores").innerHTML += 
        `<div id="alertaErrores" class="alert alert-danger" role="alert">
                ${mensajeControl}         
        </div>`
    }
    if (mal === "") {
        carritoPop();
    }

});
    
document.getElementById("botonConfirmar").addEventListener('click', ()=> {
    Swal.fire(
        'Gracias!. Esperamos su regreso.',
        'Hometown :: Beer & Friends',
        )
    
});

