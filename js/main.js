const pedidoFinales=[];
let aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.price,0);
document.getElementById("carrito-total").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;


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


productos.forEach((producto)=>{
    const idBoton=`add-cart${producto.id}`
    document.getElementById(idBoton).addEventListener('click', ()=> {
    const rdo= pedidoFinales.some((el) => el.id == producto.id);
    console.log(rdo);
    if (rdo==true){
        //const cursos = pedidoFinales.map((producto) => { 
            //if (producto.id === pedidoFinales.id){
                pedidoFinales.cantidad++;
                pedidoFinales.monto=pedidoFinales.cantidad * pedidoFinales.price;
                const eliminar=document.getElementById(`${pedidoFinales.length}`);
                pedidoFinales.splice(eliminar, 1);
                document.getElementById("itemsCarrito").innerHTML ="";
                for (const pedidoFinal of pedidoFinales){
                    document.getElementById("itemsCarrito").innerHTML += `
                        <tr>
                            <th scope="row">${pedidoFinal.id}</th>
                            <td>${pedidoFinal.title}</td>
                            <td>${pedidoFinal.cantidad}</td>
                            <td>${pedidoFinal.price}</td>
                            <td><button onclick='eliminarDelCarrito()'  id="${pedidoFinales.length}"  class="btn btn-danger" width=10px>X</button></td>
                        </tr>`;
    };
            //}
            
        //});
        
    }
    pedidoFinales.push(producto);
    cantFinal=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.cantidad,0);
    aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.monto,0);//GRACIAS!!...ahi vi donde me estaba equivocando! ;)
    mostrarIngCarrito(producto, pedidoFinales);
    document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${cantFinal} - Monto a Pagar:$${aPagar}`;

    })
});

function eliminarDelCarrito (){ 
    const eliminar=document.getElementById(`${pedidoFinales.length}`);
    pedidoFinales.splice(eliminar, 1);
    aPagar=pedidoFinales.reduce((acumulador, elemento)=>acumulador+elemento.monto,0);
    document.getElementById("carritoTotal").innerHTML = `Cantidad Pedida:${pedidoFinales.length} - Monto a Pagar:$${aPagar}`;
    document.getElementById("itemsCarrito").innerHTML ="";
    for (const pedidoFinal of pedidoFinales){
        document.getElementById("itemsCarrito").innerHTML += `
                <tr>
                    <th scope="row">${pedidoFinal.id}</th>
                    <td>${pedidoFinal.title}</td>
                    <td>${pedidoFinal.cantidad}</td>
                    <td>${pedidoFinal.price}</td>
                    <td><button onclick='eliminarDelCarrito()'  id="${pedidoFinales.length}"  class="btn btn-danger" width=10px>X</button></td>
                </tr>`;
    };
};     


//
function mostrarIngCarrito(producto, pedidoFinales){  
    
    document.getElementById("itemsCarrito").innerHTML += `
                <tr>
                    <th scope="row">${producto.id}</th>
                    <td>${producto.title}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.price}</td>
                    <td><button onclick='eliminarDelCarrito()' id="${pedidoFinales.length}"  class="btn btn-danger" width=10px>X</button></td>
                </tr>`;
};
/*const botonEliminar = pedidoFinales.indexOf();
    console.log("indexof"+botonEliminar);
//
/*function mostrarIngCarrito (tituloProd){
    alert ("Se ingreso al pedido:"+tituloProd);
};*/


document.getElementById("botonEnviar").addEventListener('click', () => {
    const nombre=document.getElementById("nombre");
    const direccion=document.getElementById("apellido");
    const email=document.getElementById("email");
    const telefono=document.getElementById("telefono");
    const mostrarErrores=document.getElementById("errores");
    
    let error="";
    let emailOk=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validacion=false;

    if(nombre.value.length < 6){
        error += 'El nombre no es valido';
    }
    if (!emailOk.test(email.value)){
        error += 'El mail no es valido';
    }
    if (direccion.value.length <5){
        error += 'El apellido no es valido';
    }
    if (isNaN(telefono)){
        error += 'El telefono no es valido';
    }
    if(validacion){
        mostrarErrores.innerHTML = error;
    }else {
        mostrarErrores.innerHTML = "Pedido Enviado";
    }

});


class datosEnvio{
    constructor(nombrecomp, direccion,telefono, datoAdic){
        this.nombrecomp=nombrecomp;
        this.direccion=direccion;
        this.telefono=telefono;
        this.datoAdic=datoAdic;
    };
};



