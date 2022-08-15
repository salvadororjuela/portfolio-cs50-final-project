/* -------------------------------------- Shopping Cart Functions -------------------------------- */

// Variables used to count items in cart
let carritocolfiesta = document.querySelectorAll('.agregarCarrito');
let carritoanillos = document.querySelectorAll('.anillos');
let carritoaretes = document.querySelectorAll('.aretes');
let carritobrazaletes = document.querySelectorAll('.brazaletes');
let carritocollares = document.querySelectorAll('.collares');
let carritotopos = document.querySelectorAll('.topos');


let colfiesta=[
    {
        articulo: 'Collar Pascua',
        etiqueta: 'collarpascua',
        precio: 200,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Anillo Pascua',
        etiqueta: 'anillopascua',
        precio: 100,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Aretes Pascua',
        etiqueta: 'aretespascua',
        precio: 120,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Topos Pascua',
        etiqueta: 'topospascua',
        precio: 70,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Juego Pascua',
        etiqueta: 'juegopascua',
        precio: 441,
        categoria: 'Juegos',
        agregado: 0
    },
    {
        articulo: 'Collar Matza',
        etiqueta: 'collarmatza',
        precio: 250,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Anillo Matza',
        etiqueta: 'anillomatza',
        precio: 100,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Aretes Matza',
        etiqueta: 'aretesmatza',
        precio: 150,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Topos Matza',
        etiqueta: 'toposmatza',
        precio: 60,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Brazalete Matza',
        etiqueta: 'brazaletematza',
        precio: 200,
        categoria: 'Brazaletes',
        agregado: 0
    },
    {
        articulo: 'Juego Matza',
        etiqueta: 'juegomatza',
        precio: 684,
        categoria: 'Juegos',
        agregado: 0
    },
    {
        articulo: 'Collar Primicias',
        etiqueta: 'collarprimicias',
        precio: 200,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Anillo Resurreccion',
        etiqueta: 'anilloresurreccion',
        precio: 100,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Anillo Primicias',
        etiqueta: 'anilloprimicias',
        precio: 120,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Topos Primicias',
        etiqueta: 'toposprimicias',
        precio: 100,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Brazalete Primicias',
        etiqueta: 'brazaleteprimicias',
        precio: 200,
        categoria: 'Brazaletes',
        agregado: 0
    },
    {
        articulo: 'Aretes Primicias',
        etiqueta: 'aretesprimicias',
        precio: 130,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Juego Primicias',
        etiqueta: 'juegoprimicias',
        precio: 765,
        categoria: 'Juegos',
        agregado: 0
    },
    {
        articulo: 'Collar Mandamientos',
        etiqueta: 'collarmandamientos',
        precio: 240,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Anillo Pentecostes',
        etiqueta: 'anillopentecostes',
        precio: 120,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Topos Espiritu Santo',
        etiqueta: 'toposespiritusanto',
        precio: 100,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Aretes Pentecostes',
        etiqueta: 'aretespentecostes',
        precio: 130,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Brazalete Pentecostes',
        etiqueta: 'brazaletepentecostes',
        precio: 210,
        categoria: 'Brazaletes',
        agregado: 0
    },
    {
        articulo: 'Juego Matza',
        etiqueta: 'juegomatza',
        precio: 720,
        categoria: 'Juegos',
        agregado: 0
    }
];

let anillos=[
    {
        articulo: 'Anillo Pascua',
        etiqueta: 'anillopascua',
        precio: 100,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Anillo Matza',
        etiqueta: 'anillomatza',
        precio: 100,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Anillo Resurreccion',
        etiqueta: 'anilloresurreccion',
        precio: 100,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Anillo Primicias',
        etiqueta: 'anilloprimicias',
        precio: 120,
        categoria: 'Anillos',
        agregado: 0
    },
    {
        articulo: 'Anillo Pentecostes',
        etiqueta: 'anillopentecostes',
        precio: 120,
        categoria: 'Anillos',
        agregado: 0
    }
];

let aretes=[
    {
        articulo: 'Aretes Pascua',
        etiqueta: 'aretespascua',
        precio: 120,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Aretes Matza',
        etiqueta: 'aretesmatza',
        precio: 150,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Aretes Primicias',
        etiqueta: 'aretesprimicias',
        precio: 130,
        categoria: 'Aretes',
        agregado: 0
    },
    {
        articulo: 'Aretes Pentecostes',
        etiqueta: 'aretespentecostes',
        precio: 130,
        categoria: 'Aretes',
        agregado: 0
    }
];

let brazaletes=[
    {
        articulo: 'Brazalete Matza',
        etiqueta: 'brazaletematza',
        precio: 200,
        categoria: 'Brazaletes',
        agregado: 0
    },
    {
        articulo: 'Brazalete Primicias',
        etiqueta: 'brazaleteprimicias',
        precio: 200,
        categoria: 'Brazaletes',
        agregado: 0
    },
    {
        articulo: 'Brazalete Pentecostes',
        etiqueta: 'brazaletepentecostes',
        precio: 210,
        categoria: 'Brazaletes',
        agregado: 0
    }
];

let collares=[
    {
        articulo: 'Collar Pascua',
        etiqueta: 'collarpascua',
        precio: 200,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Collar Matza',
        etiqueta: 'collarmatza',
        precio: 250,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Collar Primicias',
        etiqueta: 'collarprimicias',
        precio: 200,
        categoria: 'Collares',
        agregado: 0
    },
    {
        articulo: 'Collar Mandamientos',
        etiqueta: 'collarmandamientos',
        precio: 240,
        categoria: 'Collares',
        agregado: 0
    }
];

let topos=[
    {
        articulo: 'Topos Pascua',
        etiqueta: 'topospascua',
        precio: 70,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Topos Matza',
        etiqueta: 'toposmatza',
        precio: 60,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Topos Primicias',
        etiqueta: 'toposprimicias',
        precio: 100,
        categoria: 'Topos',
        agregado: 0
    },
    {
        articulo: 'Topos Espiritu Santo',
        etiqueta: 'toposespiritusanto',
        precio: 100,
        categoria: 'Topos',
        agregado: 0
    }
];

// Iterate over the carrito variable to get information
for (let i = 0; i < carritocolfiesta.length; i++) {
    //On click on every add to cart button do...
    carritocolfiesta[i].addEventListener('click', () => {
        //Calls function encarrito()
        encarrito(colfiesta[i]);
        totales(colfiesta[i]);
    });
}

// Iterate over the anillos variable to get information
for (let i = 0; i < carritoanillos.length; i++) {
    //On click on every add to cart button do...
    carritoanillos[i].addEventListener('click', () => {
        //Calls function encarrito()
        encarrito(anillos[i]);
        totales(anillos[i]);
    });
}

// Iterate over the aretes variable to get information
for (let i = 0; i < carritoaretes.length; i++) {
    //On click on every add to cart button do...
    carritoaretes[i].addEventListener('click', () => {
        //Calls function encarrito()
        encarrito(aretes[i]);
        totales(aretes[i]);
    });
}

// Iterate over the brazaletes variable to get information
for (let i = 0; i < carritobrazaletes.length; i++) {
    //On click on every add to cart button do...
    carritobrazaletes[i].addEventListener('click', () => {
        //Calls function encarrito()
        encarrito(brazaletes[i]);
        totales(brazaletes[i]);
    });
}

// Iterate over the collares variable to get information
for (let i = 0; i < carritocollares.length; i++) {
    //On click on every add to cart button do...
    carritocollares[i].addEventListener('click', () => {
        //Calls function encarrito()
        encarrito(collares[i]);
        totales(collares[i]);
    });
}

// Iterate over the topos variable to get information
for (let i = 0; i < carritotopos.length; i++) {
    //On click on every add to cart button do...
    carritotopos[i].addEventListener('click', () => {
        //Calls function encarrito()
        encarrito(topos[i]);
        totales(topos[i]);
    });
}

// //Changes the number of the <span> tag of articles in cart when an add to cart button is pressed
function encarrito(producto, action) {
    let cantproducto = localStorage.getItem('encarrito');
    //Changes cantproducto from str to int.
    cantproducto = parseInt(cantproducto, 10);
    // Grab all the items in cart
    let items = localStorage.getItem('features');
    // Parse into JavaScript from JSON.
    items = JSON.parse(items);

    // If the page is loaded for the first time and no buttos to increase or
    // decrease buttons are pressed
    //Changes the <span> tag to 1
    if (!cantproducto) {
        localStorage.setItem("encarrito", 1);
        document.querySelector(".cart span").textContent = 1;

    } else if (action == "disminuir") {
        // If the action is decrease
        // Subtract 1 from agregado of the product in local storage.
        localStorage.setItem("encarrito", cantproducto - 1);
        // Changes the <span> tag from n to n - 1
        document.querySelector('.cart span').textContent = cantproducto - 1;

    // If the action is increased
    } else {
        // Add 1 to agregado of the product in the local storage
        localStorage.setItem('encarrito', cantproducto + 1);
        // Changes the <span> tag from n to n + 1
        document.querySelector('.cart span').textContent = cantproducto + 1;
    }


    // Calls the function that processes the agregado element in each value of the dictionaries
    cantidadagregada(producto);

}

// Function to display the products on the cart website
function mostrarcarro() {
    //Variable in localStorage that stores the items put in cart
    let items = localStorage.getItem('features');
    //Turns items into JSON.
    items = JSON.parse(items);
    //Variable to get the information from the website
    let productosin = document.querySelector(".productoscarro");
    let costocarro = localStorage.getItem('totales');
    // Verify if productoscarro exists (we are on the website) and if we have items in our cart (items) in the local storage
    if(items && productosin) {
        //Empty the page when it is initially loaded..
        productosin.innerHTML = '';
        //... then loop through all the items in local storage to get the values and not the keys as follows..
        Object.values(items).map(item => {
            //Add products to display and avoid over write (+=)
            //Use `` to inject varibles with strings
            productosin.innerHTML += `
            <div class="producto" title="Quitar del Carrito">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-x-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                </svg>
                <img src="./static/colfiesta/${item.etiqueta}.jpeg">&nbsp; &nbsp;
                <span name="articulo">${item.articulo}</span>
            </div>
            <div class="headercategoria" name="categoria">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;${item.categoria}</div>
            <div class="headerprecio" name="precio">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$${item.precio}</div>
            <div class="headercantidad">
                &nbsp; &nbsp; &nbsp;<button class="disminuir w3-button w3-xlarge w3-circle w3-teal" title="Restar">-</button>
                <span name="cantidad">&nbsp; &nbsp; &nbsp;${item.agregado}</span>&nbsp; &nbsp; &nbsp;
                <button class="aumentar w3-button w3-xlarge w3-circle w3-teal" title="Agregar">+</button>
            </div>
            <div class="headertotal" name="total">
                &nbsp; &nbsp; &nbsp; &nbsp;$${item.agregado * item.precio}
            </div>
            `;
        });
        //Div to show the total sum of products
        productosin.innerHTML += `
            <div class="sumatotal">
                <h3 class="headersumatotal">
                    Total en Carro
                </h3>
                <h3 class="totalcarro">
                    $${costocarro}
                </h3>
            </div>
        `;
    }
    // Calls the function to enable buttons in cart
    quitarproducto();
    // Function to add event listener to the increase decrease buttons
    increasedecrease();
}

//Recalls the quantity of items in chart shown in the <span> tag every time the page is refreshed. Avoids to reset to 0
function recordarcantidad() {
    // The cantproducto variable stores the number of items currently stored by the function encarrito() in localStorage
    let cantproducto = localStorage.getItem('encarrito');

    // If cantidad exists
    if(cantproducto) {
        // Shows on the <span> tag the value stored in localStorage
        document.querySelector('.cart span').textContent = cantproducto;
    }
}

//Function that increments the number of the agregado element in the object features in local storage
function cantidadagregada(producto) {
    //Variable in localStorage to store information of each element into an object called features
    let items = localStorage.getItem('features');
    //Turns items into JSON.
    items = JSON.parse(items);

    // If items is null, set items.agregado to 1
    if(items == null) {
        //Increments the producto.agregado by 1
        producto.agregado = 1;
        //Creates a product.etiqueta with the content of the producto passed in.
        items = {
            [producto.etiqueta]: producto
        };

    //Else if the variable items already exists in localstorage...
    } else {
        // If items is different from the first one put in (a new product is put in the shopping cart)
        if(items[producto.etiqueta] == undefined) {
            items = {
                //Uses the rest operator of javaScript to use what is previously been put in producto...
                ...items,
                //...and put it in a new producto.etiqueta with the content of the producto passed in
                [producto.etiqueta]: producto
            };
        }
        //Adds +1 each time a product is added to the shopping cart
        items[producto.etiqueta].agregado += 1;
    }
    //Passes the variable items into an item called features inside localStorage as a JSON object so it can be read
    localStorage.setItem("features", JSON.stringify (items));
}

//Function to calculate the total cost of products in the cart
function totales(producto, action){
    //Variable to get the value of totales in local storage
    let costocarro = localStorage.getItem("totales");
    //If no value exists in costocarro (no items added to shopping cart)...
    if (costocarro == null) {
       //Create an item in localStorage to store the price of each producto
        localStorage.setItem("totales", producto.precio);
    }
    // If action is 'disminuir'
    else if ( action == "disminuir") {
        //Convert the value of costocarro from a string to an integer.
        costocarro = parseInt(costocarro, 10);
        //Subtract the price of the removed producto.precio to the costocarro already stored.
        localStorage.setItem('totales', costocarro - producto.precio);
    }
    //If action is 'aumentar'
    else {
        //Convert the value of costocarro from a string to an integer.
        costocarro = parseInt(costocarro, 10);
        //Add the price of the new producto.precio to the costocarro already stored.
        localStorage.setItem("totales", costocarro + producto.precio);
    }
}

// Function to remove a product of a kind from the cart
function quitarproducto () {
    // Close button to remove all items of one item
    let quitarproducto = document.querySelectorAll('.producto svg');
    // Variable to store product information
    let nombrearticulo;
    // Variable to know the number of items in the cart
    let cantproducto = localStorage.getItem('encarrito');
    // Variable to get the values of the object features of each product
    let items = localStorage.getItem('features');
    // Parse to convert into JavaScript from JSON
    items = JSON.parse(items);
    // Asign variable to manage total value
    let costocarro = localStorage.getItem('totales');

    // Loop throug all the buttons and set up an event listener click to each remove svg tag
    for(let i=0; i < quitarproducto.length; i++){
        quitarproducto[i].addEventListener('click', () => {
            // Make articulo equal to etiqueta of each product
            nombrearticulo = quitarproducto[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
            // Grab each of the cantproducto and subtract them from encarrito
            localStorage.setItem('encarrito', cantproducto - items[nombrearticulo].agregado);
            // Grab each of the totalcarro and subtract them from total
            localStorage.setItem('totales', costocarro - (items[nombrearticulo].precio * items[nombrearticulo].agregado));
            // On click delete the chosen items
            delete items[nombrearticulo];
            // Set features into JSON format
            localStorage.setItem('features', JSON.stringify(items));
            // Call functions to show new values on DOM.
            mostrarcarro();
            recordarcantidad();
        });
    }
}

// Function to increase or decrease products in cart DOM
function increasedecrease() {
    // Grab all the buttons to increase and decrease quantities
    let menosboton = document.querySelectorAll('.disminuir');
    let masboton = document.querySelectorAll('.aumentar');
    // Grab the items currently in cart
    let items = localStorage.getItem('features');
    let cantactual = 0;
    let prodactual = "";
    // Parse into javaScript the JSON objects
    items = JSON.parse(items);
    // Loop through all decrease buttons and add an event listener (click)
    for(let i=0; i < menosboton.length; i++) {
        menosboton[i].addEventListener('click', () => {
            // Get the actual number of elements shown in the cart span of the DOM.
            cantactual = menosboton[i].parentElement.querySelector('span').textContent;
            // Get the value of the span when clicking on the .disminuir button and attached to the sibling div located
            // three leves ahead. Then make articulo equal to etiqueta of each product.
            prodactual =
menosboton[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            // Do the subtraction only if the value is greater than 1
            if (items[prodactual].agregado > 1) {
                // On click subtract 1 to agregado from prodactual selected
                items[prodactual].agregado = items[prodactual].agregado - 1;
                // Call incarrito() function and pass items[prodactual] to decrease the span numbers as the action argument
                encarrito(items[prodactual], 'disminuir');
                // Calls totales() function and pass  items[prodactual] to decrease the totals in DOM.
                totales(items[prodactual], 'disminuir');
                // Return the value in JSON format
                localStorage.setItem('features', JSON.stringify(items));
                // Call mostrarcarro() with the new value for the span.
                mostrarcarro();
            }
        });
    }

    // Loop through all increase buttons and add an event listener (click)
    for(let i=0; i < masboton.length; i++) {
        masboton[i].addEventListener('click', () => {
            // Get the actual number of elements shown in the cart span of the DOM
            cantactual = masboton[i].parentElement.querySelector('span').textContent;
            // Get the value of the span when clicking on the .aumentar button attached to the sibling div located
            // three leves ahead. make articulo equal to etiqueta of each product.
            prodactual =
masboton[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            // On click add 1 to the agregado from prodactual selected
            items[prodactual].agregado = items[prodactual].agregado + 1;
            // call encarrito() function and pass in items[prodactua] to increase the span numbers as the action argument
            encarrito(items[prodactual]);
            // Call totales() function and pass in items[prodactua] to increase the totals in DOM
            totales(items[prodactual]);
            // Return the value in JSON format
            localStorage.setItem('features', JSON.stringify(items));
            // Call mostrarcarro() with the new value for the span.
            mostrarcarro();
        });
    }
}

function clearSession () {
    window.localStorage.clear();
}

// On load calls these functions
recordarcantidad();
mostrarcarro();

// Enables buttons to pay or cancel in compras.html. This function is called
// when the <body> in layout.html is loaded (onload="paraPagar();")
function paraPagar() {
    let cantproducto = localStorage.getItem('encarrito');
    var visible = document.getElementById("paraPagar");
    if(cantproducto > 0) {
        visible.style.display = "block";
    } else if (cantproducto == 0) {
        visible.style.display = "none";
    }
}