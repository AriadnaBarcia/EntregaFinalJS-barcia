// Esperar a que se cargue el DOM antes de ejecutar la función ready
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
  //mostrarModelos()
} else {
  ready();
 // mostrarModelos()
}

// funcionalidad al carrito
function ready() {
  // Agregar funcionalidad al botón de eliminar
  let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
  for (let button of botonesEliminarItem) {
    button.addEventListener('click', eliminarItemCarrito);
  }

  // botón agregar cantidad
  let botonSumarCantidad = document.getElementsByName('sumar-cantidad');
  for (let button of botonSumarCantidad) {
    button.addEventListener('click', sumarCantidad);
  }

  // botón restar cantidad
  let botonRestarCantidad = document.getElementsByName('restar-cantidad');
  for (let button of botonRestarCantidad) {
    button.addEventListener('click', restarCantidad);
  }

  // botón agregar al carrito
  let botonAgregarAlCarrito = document.getElementsByClassName('boton-item');
  for (let button of botonAgregarAlCarrito) {
    button.addEventListener('click', agregarAlCarritoClicked);
  }

  // botón pagar
  document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);
  ocultarCarrito();
}

function mostrarModelos() {
  let totalItems = '';
  let modelos = [
    {
      foto: "../img/Model-1.png",
      titulo: "BMW M2 Coupé",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-2.png",
      titulo: "BMW M3 Sedán",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-3.png",
      titulo: "BMW M3 CS",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-4.png",
      titulo: "BMW M3 Touring",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-5.png",
      titulo: "BMW M4",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-6.png",
      titulo: "BMW M4 con M xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-7.png",
      titulo: "BMW M5",
      precio: obtenerPrecioRandom(80000, 900000)
    }, {
      foto: "../img/Model-8.png",
      titulo: "BMW M8 Coupé BMW M8",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-9.png",
      titulo: "BMW M8 Cabrio BMW M8",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-10.png",
      titulo: "BMW M8 Gran Coupé BMW M8",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-11.png",
      titulo: "BMW X3M BMW X3 M Competición",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-12.png",
      titulo: "BMW X4M BMW X4 M Competición",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-13.png",
      titulo: "BMW X5 M Competición",
      precio: obtenerPrecioRandom(80000, 900000)
    }, {
      foto: "../img/Model-14.png",
      titulo: "BMW X6 M Competición",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-15.png",
      titulo: "BMW XM Híbrido enchufable",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-16.png",
      titulo: "BMW XM Etiqueta Roja Híbrido",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-17.png",
      titulo: "BMW 3.0 CSL",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-18.png",
      titulo: "BMW M135i xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-19.png",
      titulo: "BMW M235i xDrive Gran Coupé",
      precio: obtenerPrecioRandom(80000, 900000)
    }, {
      foto: "../img/Model-20.png",
      titulo: "BMW M240i xDrive Coupé",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-21.png",
      titulo: "BMW M340i xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-22.png",
      titulo: "BMW M340i xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-23.png",
      titulo: "Cabrio BMW M440d xDrive Cabrio",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-24.png",
      titulo: "Cabrio BMW M440d xDrive Cabrio",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-25.png",
      titulo: "Gran Coupé",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-26.png",
      titulo: "BMW i4 m50",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-27.png",
      titulo: "BMW M550i xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-28.png",
      titulo: "BMW M760e xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    }, {
      foto: "../img/Model-29.png",
      titulo: "BMW M760e xDrive",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-30.png",
      titulo: "BMW M850i ​​xDrive Coupé",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-31.png",
      titulo: "BMW M850i ​​xDrive Cabrio",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-32.png",
      titulo: "BMW M850i ​​xDrive Gran Coupé",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-33.png",
      titulo: "BMW X2 M35i",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-34.png",
      titulo: "BMW X3 M40i",
      precio: obtenerPrecioRandom(80000, 900000)
    },
    {
      foto: "../img/Model-35.png",
      titulo: "BMW X3 M40i",
      precio: obtenerPrecioRandom(80000, 900000)
    }
  ]
  //let modeloOriginales = modelos
 // console.lo
  for (let posicion = 0; posicion < modelos.length; posicion++) {
    totalItems += ` <div class="item">
  <span class="titulo-item">`+ modelos[posicion].titulo + `</span>
  <img src="`+ modelos[posicion].foto + `" alt="" class="img-item">
  <span class="precio-item">US$`+ modelos[posicion].precio + `</span>
  <button class="boton-item">Agregar al Carrito</button>
  </div>`;
  }

  let htmlItems = document.getElementById('contenedor-items');
  htmlItems.innerHTML = totalItems;
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  //Acurializamos el total del carrito
  actualizarTotalCarrito();
  //funcion controla si hay elementos en el carrito una vez que se elimino
  //si no hay se debe ocultar el carrito
  ocultarCarrito();
}

function actualizarTotalCarrito() {
  let carritoContenedor = document.getElementsByClassName('carrito')[0];
  let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
  let total = 0;
  for (let i = 0; i < carritoItems.length; i++) {
    let item = carritoItems[i];
    let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
    console.log(precioElemento)
    let precio = parseFloat(precioElemento.textContent.replace('US$', ''));
    console.log(precio)

    let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
    let cantidad = cantidadItem.value;
    total = total + (precio * cantidad);
  }
  total = Math.round(total * 100) / 100;
  document.getElementById('carrito-precio-total').innerText = 'US$' + total.toLocaleString("es") + ',00';
}

function ocultarCarrito() {
  let carrito = document.getElementsByClassName('carrito')[0];
  let cantidadItems = document.getElementsByClassName('carrito-items')[0];
  if (cantidadItems.childElementCount == 0) {
    carrito.style.display = 'none';
    let items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '100%'
  } else {
    carrito.style.display = 'block';
  }
}

//aumento en uno la cantidad de elementos seleccionados
function sumarCantidad(event) {
  let buttomClicked = event.target;
  let selector = buttomClicked.parentElement;
  let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
  console.log(cantidadActual);
  cantidadActual++;
  selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
  //Actualizamos total
  actualizarTotalCarrito();
}

function restarCantidad(event) {
  let buttonClicked = event.target;
  let selector = buttonClicked.parentElement;
  let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
  cantidadActual--;

  //controlamos que no sea menor que 1
  if (cantidadActual >= 1) {
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    //actializamos total
    actualizarTotalCarrito();

  }
  selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
  //Actualizamos total
  actualizarTotalCarrito();
}
function agregarAlCarritoClicked(event) {
  let button = event.target;
  let item = button.parentElement;
  let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
  let precio = item.getElementsByClassName('precio-item')[0].innerText;
  let imagenSrc = item.getElementsByClassName('img-item')[0].src;

  //agregar el elemento al carrito
  agregarItemAlCarrito(titulo, precio, imagenSrc);

  //hacemos visible el carrito cuando se agrega algo 
  hacerVisibleCarrito();
}

function agregarItemAlCarrito(titulo, precio, imagenSrc) {
  let item = document.createElement('div');
  item.classList.add = 'item';
  let itemsCarrito = document.getElementsByClassName('carrito-items')[0];

  //controlamos que el item que esta ingresando no se encuentre ya adentro del carrito
  let nombresItemCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
  for (let i = 0; i < nombresItemCarrito.length; i++) {
    if (nombresItemCarrito[i].innerText == titulo) {
      mostrarAlerts('error')
      // alert("El elemento ya se encuentra en el carrito");
      return;
    }
  }
  let itemCarritoContenido = ` <div class="carrito-item">
              <img src="`+ imagenSrc + `" alt="" width="80px">
              <div class="carrito-item-detalles">
                  <span class="carrito-item-titulo">`+ titulo + ` </span>
                  <div class="selector-cantidad">
                      <i class="fa-solid fa-minus restar-cantidad"></i>
                      <input type="text" value="1" class="carrito-item-cantidad" disabled>
                      <i class="fa-solid fa-plus sumar-cantidad"></i>
                  </div>
                  <span class="carrito-item-precio">` + precio + `</span>
              </div>
              <span class="btn-eliminar">
                  <i class="fa-solid fa-trash"></i>
              </span>
          </div>`
  item.innerHTML = itemCarritoContenido;
  itemsCarrito.append(item);
  actualizarTotalCarrito();
  let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
  botonSumarCantidad.addEventListener('click', sumarCantidad);

  let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
  botonRestarCantidad.addEventListener('click', restarCantidad);
  ready();
}

function pagarClicked(event) {
  alertCompraFinalizada('exito')
  //alert("Gracias por su compra")
  //eliminar todo los elementos del carrito
  let carritoItems = document.getElementsByClassName('carrito-items')[0];
  while (carritoItems.hasChildNodes()) {
    carritoItems.removeChild(carritoItems.firstChild)
  }
  //ocultar carrito
  ocultarCarrito()
}

function hacerVisibleCarrito() {
  let carrito = document.getElementsByClassName('carrito')[0];
  carrito.style.marginRight = '0';
  carrito.style.opacity = '1';

  let items = document.getElementsByClassName('contenedor-items')[0];
  items.style.width = '69%';
}

function obtenerPrecioRandom(min, max) {
  let valor = Math.random() * (max - min) + min;
  return parseInt(valor)
}

function alertDuplicados() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Este modelo ya se encuentra en el carrito',
    confirmButtonText: 'Aceptar'
  })
}

function alertCompraFinalizada() {
  let usuario = JSON.parse(localStorage.getItem('usuario'))
  Swal.fire({
    icon: 'success',
    title: 'Compra Exitosa',
    text: usuario.nombre +' su compra se realizo correctamente',
    confirmButtonText: 'Aceptar'
  })
}

function mostrarAlerts(tipo){
  tipo==='error'? alertDuplicados() : alertCompraFinalizada()
}

//promise:
function waitForDOMContentLoaded() {
  return new Promise((resolve) => {
    if (document.readyState === 'cargando') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
}

function readyAsync() {
  return new Promise((resolve) => {
    ready();
    resolve();
  });
}

function mostrarModelosAsync() {
  return new Promise((resolve) => {
    mostrarModelos();
    resolve();
  });
}

waitForDOMContentLoaded()
  .then(readyAsync)
  .then(mostrarModelosAsync)
  .then(() => {
  })
  .catch((error) => {
    console.error('A ocurrido un error:', error);
  });

