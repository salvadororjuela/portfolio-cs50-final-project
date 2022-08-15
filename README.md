# PALABRA DE DIOS JEWELRY STORE WEBSITE
#### Video Demo:  <https://youtu.be/n_UevxN8dOU>
#### Description:

GENERAL DESCRIPTION

The idea for this project came from my wife's business idea of a religious jewelry
store called Palabra de Dios.

The project was developed using HTML, CSS, JavaScript, Python3, Flask, and
Sqlite3.

The website has several pages which are intended to display information about the
store and others are focused on core interactions like subscribe to the store as
clients, save their information into a database, sending emails to a real company
email account, select products to eventually purchase, and finally review preorders
and editing them previously to purchase order confirmation.

On all pages, users can interact via, buttons, links, and input fields that provide
an experience that approaches them to what the real website will offer.

The project is a front-end website and covers the aspects previously mentioned.
However, it neither processes payments nor redirects to any real payment platform.

Inside ~/finalproject folder, there are two inner folders and four separate
files. The static folder contains all images used in the project and also three
JavaScript files: carts.js, gallery.js, and script.js. All of them contain
functions that execute most of the actions developed when users interact with the
website.

The other file located inside the static folder is styles.css, which establishes
all the styling parameters for the website.

The second folder is called templates. This folder contains all HTML files designed
to show the content of the website and its web pages.

All common elements for all the web pages are located inside the layout.html file.
These elements are the head, the navigation bar, and the footer of the website.
The rest of the HTML files contain specific information for each webpage.

The separate files are application.py, helpers.py, dbusers.db, and README.md.
application.py is the file that uses Flask to determine the routes to each website.
It uses Flask session to manage users' information when they log in, register as
clients to the store, save and edit clients' information, and clear the session
when users log out.

helpers.py controls when log in is required (@login_required) in compras, and in
micuenta routes.

dbusers.db is the database that handles users' information.

README.md contains the general explanation of the project.



JAVASCRIPT FILES DESCRIPTION


1. gallery.js

It controls different actions of the image gallery located in colecciones.html.
The file consists of four functions. The first one is
mostrarDispositiva(numDiapositiva);. This function receives the numDiapositiva
variable that is initially set to 1.
The second function is diapositivas(n). This function is called when the <a> classes
"next" or "prev" are clicked from colecciones.html. If next is clicked, the argument
passed in is 1. If prev is clicked, the argument passed in is -1.
Inside the function, the mostrarDispositiva(numDiapositiva += n); is called and
receives the previous argument and adds or subtracts the numDiapositiva variable
number (o or -1).
The third function is diaSeleccionada(n). This function receives the argument passed
in when clicking on the <img> class "miniature", located in colecciones.html. The
function is used to display the current image on screen. It calls
mostrarDispositiva(numDiapositiva = n); and passes in the number determined for each
image according to the user selection (onclick="diaSeleccionada(1)",
onclick="diaSeleccionada(2)"... etc).
The fourth function is mostrarDispositiva(n). This function starts by declaring
variables to handle all classes. It is also related to the gallery controls.
Inside the function, the first if statement is used to move from the last photo to the
first one when it reaches the highest numDiapositiva.
The second if statement is used to move from the first photo to the last one when it
reaches the smallest number of numDiapositiva.
The first for loop loops through all the photos and only shows one and hides the
remaining ones.
The second for loop loops through all the miniatures of the photos and determines that
the active one is the same large photo display on the gallery.
Also, this function determines which miniature is displayed with full or 0.3 opacity,
according to the previous conditions and the parameters defined inside styles.css.
Both for loops, uses the values asigned at the end of the function through
imagenes[numDiapositiva-1].style.display = "block"; and
miniaturas[numDiapositiva-1].className += " active"; accordingly.
Finally, to display the current index of the current photo and miniature
indice.innerHTML = miniaturas[numDiapositiva-1].alt; is used. To do so, it uses the
miniature reference number ((onclick="diaSeleccionada(1)",
onclick="diaSeleccionada(2)"... etc).) and subtracts 1 to display the correct number on
screen.


2. script.js

a. Volver Arriba Button

The button to return the top of the page is located at the bottom of the body in
layout.html.
To control the Back to Top button, two functions are used.
The first function is scrollFunction(). It is called when the window is scrolled down
(window.onscroll = function() {scrollFunction();};). It defines that when the body
scrolls down 20px, it changes the initial hidden style of the button to block (display).
If the body is not scrolled down more than 20px or it returns to the top position the
button style changes to hidden (mybutton.style.display = "none";).
The function backtotop() is triggered when clicking on the back to the top button. Then
it hides it as the top of the webpage is reached
(document.body.scrollTop = 0; document.documentElement.scrollTop = 0;).

b. enable();

To call this function, the onKeyup attribute is used each time the different elements
inside forms are run in suscribir.html and modificar.html. The function uses a for loop
to get all the elements with a form element for (var i = 0; i < gets.length; i++).
Inside this for loop, it appears an if statement which checks if there is no information
in input elements (if (gets[i].value.length == 0) enable = false;). If no information is
input by users, the buttons which id="submitbtn" is assigned, will remain disabled.
The second if statemen is located after the for loop, and it is used to verify if the
button is finally enabled after all required inputs are filled
(if (enable) {
        document.getElementById('submitbtn').disabled = false;)

c. disable(); disabledno();

These two functions are to update users' preferences whether they want to receive or not
a newsletter. They are called by the onchange attribute on lines 755 and 757 in
micuenta.html.
Also, they produce an alert to indicate the changes the user will effect.
They are defined to act in an opposite way, and their function is to use the content of
the checkmark as an indicator of whether the user wants to receive or not the company's
newsletter.
If clients checkmark the empty checkbox, the function is set to true and the answer will
be taken as a yes. If the client removes the checkmark from the checkbox, the answer will
be taken as a no. Once users save their preference, the information is changed and
stored in users table inside dbusers.db.

d. habeliminar(); appeareliminar()

After clicking on the button to eliminate the account, this function Launches an alert to
indicate that users will definitively delete their accounts from the company's database.
It uses the line 825
(<button id="modificarbutton" type="submit" value="Submit" onclick="appeareliminar()">) to
launch an initial alert that indicates that the action is not reversible. This action is
done when it calles the onclick event that invoques appeareliminar();.
When users click on the ok button, the hidden section is displayed (id="hidden12") which
is a second alert that requires that clients checkmark the confirmation checkbox. When the
checkbox is marked it launches a third alert according to the line No. 836
(<p><input type="checkbox" id="delete" name="delete" onchange="habeliminar()"></p>) in
which habeliminar(); function is called to do it.
Finally, if users checkmark the box and click on accept, the deletion of the account is
definitive and uses the if statement located in line 312 in application.py
(if request.form.get("delete"):) to complete this task.

e. validation()

Verifies password and password confirmation are identical.
This function is used in suscribir.html and micuenta.html.
The const declared are password and confirm, and they get the values of the HTML elements
named password and confirmation correspondingly
(const password = document.querySelector('input[name=password]');
const confirm = document.querySelector('input[name=confirmation]');).
After the values are assigned to the const, it verifies if the values are identical. If
they are the same (if (confirm.value === password.value)) the application lets the user
continue. If they are different, the application displays an alert indicating this to the
user.

f.  appearnombres(), appearapellidos(), appeardirenvio(), appearciudadenvio(),
    appeardirfact(), appearciudadfact(), appearpais(), appearcorreo(), appeartelefono(),
    appearnews(), appearpassword(), appeareliminar().

All previous functions display hidden elements identified with the correspondent id by
calling the correspondent function when the user clicks on the button designated to change
the user's information in micuenta.html.
All functions define a variable to get the value of the element identified with the id
(i.e.  var visible = document.getElementById("hidden10");). If the variable is hidden, it
changes it to visible. Else, if the element is displayed, when the function is called it
changes to hidden.
if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

g. hidenews(), hide(), hide1()

These functions hide elements identify with ids hidden10, hidden11, and hidden12 in
micuenta.html when clicking on the cancel button.
All functions define a variable to get the value of the element identified with the id
(i.e. var visible = document.getElementById("hidden11");). If the element is displayed,
it hides this element when the function is called.
if (visible.style.display === "block") {
        visible.style.display = "none";
}

3. cart.js

a. Description

cart.js is a file designed to process the selection of products that clients will
purchase and displays quantities, values, totals, and products information.
cart.js uses compras.html to display the information of the purchase the user will make
before the final preferences about products and quantities are defined just before the
user proceeds to checkout.
In addition, cart.js displays the current quantity of products that the user wants to
purchase in the span bubble that contains this number located in layout.html.
Finally, this file lets the user change their preferences about quantities of the products
in the cart, deletion of a single product from the cart, removal of all products, and
final checkout.
The first part of cart.js declares all variables used to count items in the cart by
getting them by class.
The variable carritoColfiesta is used to get the buttons identified with
class="agregarCarrito" in 1colfiesta.html and run the for loop in line 339. This loop
iterates over all the buttons and adds an event listener ('click') to each button. When the
clicked button is found, the for loop calls the function encarrito(colfiesta[i]) and passes
the colfiesta[i] object as an argument.  This object is gotten from the colfiesta array
[i]th element.The colfiesta array is declared in line 12, and this array contains
the products and characteristics of them displayed in 1colfiesta.html.
After that, the for loop calls the function totales(colfiesta[i]) and passes the same
colfiesta[i] element as argument.
The variable carritoanillos is used to get the buttons identified with
class="agregarCarrito" in anillos.html and run the for loop in line 349. This loop
iterates over all the buttons and adds an event listener ('click') to each button. When the
clicked button is found, the for loop calls the function encarrito(anillos[i]) and passes
the anillos[i] object as an argument.  This object is gotten from the anillos array [i]th
element.The anillos array is declared in line 183, and this array contains the products and
characteristics of them displayed in anillos.html.
After that, the for loop calls the function totales(anillos[i]) and passes the same
anillos[i] element as argument.
The variable carritoaaretes is used to get the buttons identified with
class="agregarCarrito" in aretes.html and run the for loop in line 359. This loop
iterates over all the buttons and adds an event listener ('click') to each button. When the
clicked button is found, the for loop calls the function encarrito(aretes[i]) and passes
the aretes[i] object as an argument.  This object is gotten from the aretes array [i]th
element.The anillos array is declared in line 221, and this array contains the products and
characteristics of them displayed in aretes.html.
After that, the for loop calls the function totales(aretes[i]) and passes the same
aretes[i] element as argument.
The variable carritobrazaletes is used to get the buttons identified with
class="agregarCarrito" in brazaletes.html and run the for loop in line 369. This loop
iterates over all the buttons and adds an event listener ('click') to each button. When the
clicked button is found, the for loop calls the function encarrito(brazaletes[i]) and passes
the brazaletes[i] object as an argument.  This object is gotten from the brazaletes array
[i]th element.The brazaletes array is declared in line 252, and this array contains the
products and characteristics of them displayed in brazaletes.html.
After that, the for loop calls the function totales(brazaletes[i]) and passes the same
brazaletes[i] element as argument.
The variable carritocollares is used to get the buttons identified with
class="agregarCarrito" in collares.html and run the for loop in line 379. This loop
iterates over all the buttons and adds an event listener ('click') to each button. When the
clicked button is found, the for loop calls the function encarrito(collares[i]) and passes
the collares[i] object as an argument.  This object is gotten from the collares array [i]th
element.The collares array is declared in line 276, and this array contains the products
and characteristics of them displayed in collares.html.
After that, the for loop calls the function totales(collares[i]) and passes the same
collares[i] element as argument.
The variable carritotopos is used to get the buttons identified with class="agregarCarrito"
in topos.html and run the for loop in line 389. This loop iterates over all the buttons and
adds an event listener ('click') to each button. When the clicked button is found, the for
loop calls the function encarrito(topos[i]) and passes the topos[i] object as an argument.
This object is gotten from the topos array [i]th element.The topos array is declared in line
307, and this array contains the products and characteristics of them displayed in topos.html.
After that, the for loop calls the function totales(topos[i]) and passes the same topos[i]
element as argument.

b. Functions

encarrito();

The function encarrito(); takes two arguments, and the purpose of this function is to change
the number of the <span> textContent, which id is "bubble" in layout.html, with the current
number of items the user wants to purchase. This number changes every time the user clicks on
a class="agregarCarrito" button.
encarrito(); defines two variables: cantproducto variable that gets the item named 'encarrito'
from the local storage and then in line 402 changes its type from str to int.
The second variable is items, and this variable gets the item named 'features' from local
storage, then the items variable is parsed into JavaScript format from JSON format.
The first if statement determines if no items are added to the cart, and the original value is
0. If there are items in the cart, the item 'encarrito' is set to 1 in the local storage
(localStorage.setItem("encarrito", 1);) and the (".cart span").textcontent changes to 1.
The else if statement is used to determine if the action passed in as an argument to subtract
an item from the cart when the class="disminuir" button is clicked. When that happens, the
content of the item 'encarrito' from the local storage is replaced by cantproducto - 1
localStorage.setItem("encarrito", cantproducto - 1);. Then it changes the content of
('.cart span').textcontent from n to n - 1
(document.querySelector('.cart span').textContent = cantproducto + 1;).
The else statement uses the same mecanics of the else if statement, but it adds 1 instead of
subtract (document.querySelector('.cart span').textContent = cantproducto + 1;).
Finally, cantidadagregada(); function is called, and the agregado argument is passed in.

mostrarcarro();

This function displays products on compras.html, and allows the user to add, subtract, delete
items from the cart, remove all items in the cart, and calculate totals to pay.
The function declares the variable items to get the elements of the object named features in
localstorage, productosin to obtain all elements from the <div class="productoscarro"> in
compras.html, and costocarro to get the value of the object ('totales') from the local storage.
The if statement determines if there are products in cart and if productoscarro exist
if(items && productosin). If they do, the function clears the page when loaded initially and
then it proceeds to loop trough all the objects created in local storage to get their values
(features, totales, encarrito). After this, inside productosin.innerHTML all objects values
obtained from the local storage are displayed dinamically using ${item.etiqueta},
${item.articulo}, ${item.categoria}, ${item.precio}, ${item.agregado},
${item.agregado * item.precio}.
Below the previous <div class="producto">, another productosin.innerHTML is injected in line
474 to display the total cost of all the products using ${costocarro}.
Finally, the function quitarproducto(); enable the buttons in the cart, and the function
increasedecrease(); adds event listeners to the increase and decrease buttons.

recordadcantidad();

This function recalls the number of items in the cart shown in the <span class="bubble"> tag
every time the page gets refreshed. Also, it prevents this value from being reset to 0.
It basically gets the current value of the the item "encarrito" from local storage
(let cantproducto = localStorage.getItem('encarrito')). If there is a value in it, the number
is effectively displayed inside the span tag
(document.querySelector('.cart span').textContent = cantproducto;).

canitdadagregada();

cantidadagregada(); receives the (producto) argument when it is called at the end of
encarrito(); (line 432).
This function increases the number of 'agregado' elements inside the 'features' object in the
local storage.
Inside the function the items variable is declared to store the information of each element of
the 'features' object (let items = localStorage.getItem('features');). Then the variable is
turned into JSON format.
The if statement located in line 511 checks if there are no items in local storage. If the
statement confirms this (items == null), it declares producto.agregado = 1. What this means is
that a first product is added to the shopping cart. Then, it creates producto.etiqueta:
producto, which function is to pass information to other functions in cart.js.
The else statement in line 520 checks if there are items already stored in local storage.
To do so, it verifies if the element has an undefined format using the first if statement
(if(items[producto.etiqueta] == undefined)). That means that if the variable 'items' has an
undefined format, an element already exists. In other words, that another product of the same
kind is added to the shopping cart.
After this, the rest operator brings what has already been put in the shopping cart (line 525),
and then another product is inserted in it using [producto. etiqueta]: producto.
After the else statement finishes, line 531 adds 1 to the agregado feature of the same item
the client clicked on to purchase previously (items[producto.etiqueta].agregado += 1;).
Finally, the object 'items' is passed into the object features inside the local storage as a
JSON format object (localStorage.setItem("features", JSON.stringify (items));).

totales();

This function calculates the total cost of products in the cart. It receives two arguments,
producto is the product selected to add to the cart, and action is the argument that commands
if the amount increases or decreases.
Inside the function, the variable costocarro gets the value of totales in the local store. If
the object totales does not exist yet (if (costocarro == null)), it is set in the local storage
(line 544).
If totales already exist, the else if statement verifies if the action 'disminuir' is received.
In this case, costocarro is converted from a string to an integer. Then, the object totales is
set to the value of costocarro minus producto.precio, which corresponds to the price of each
product that appears inside arrays colfiesta, anillos, aretes, brazaletes, collares, and topos.
Finally, the function uses the else statement when the argument 'action' received corresponds to
'aumentar'.
This statement does the same action as the else if one, but instead of subtracting the value of
producto.precio, it adds it to costocarro
(localStorage.setItem("totales", costocarro + producto.precio);).

quitarproducto();

quitarproducto(); handles the <svg> tag that removes all products of the same kind from the
cart and the actions after the user clicks on this tag.
The function starts by declaring the variable quitarproducto. This variable gets all the SVG
tags inside the <div class="producto"> that were injected dynamically in compras.html by cart.js
(line 453 to 470).
The following variable is nombrearticulo. This variable is used inside the loop of line 578 and
determines the number of iterations of the loop for(let i=0; i < quitarproducto.length; i++).
Inside the loop, nombrearticulo is assigned with the value of quitarproducto[i], but its value
is edited to make it equal to the value of each 'etiqueta' inside arrays colfiesta, anillos,
aretes, brazaletes, collares, and topos. To do this, the function removes extra spaces before
and after the element, turning it into lowercase, and replacing the spaces between words
(nombrearticulo = quitarproducto[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');).
After that, the for loop sets the object 'encarrito' in the local storage to the value of
cantproducto minus the value of agregado for the items variable that matches the name
nombrearticulo (line 583) to remove all items of the same kind.
In line 585, the loop sets the object 'totales' in the local storage to the value of costocarro
minus the value of precio for the items variable that matches the name nombrearticulo multiplied
by the value in 'agregado' for the items variable that matches the name nombrearticulo.
After this, line 587 deletes the chosen item and returns the object 'features' to the local
storage in a JSON format (line 589).
Finally, the loop calls the mostrarcarro(); function to display the new list of products on
compras.html, and also calls the recordadcantidad(); function to update the number of products
displayed in the cart <span> tag in layout.html.

increasedecrease();

The function increasedecrease(); handles the buttons class="disminuir" and class="aumentar" in
cart.js, which are displayed in compras.html when the user has products in the cart.
The variables menosboton and masboton get all the buttons to increase and decrease quantities.
The items variable gets the current value of 'features' from local storage.
cantactual and productual are variables used to change quantities and products currently stored
in local storage.
The loop in line 609 iterates over all class="disminuir" buttons and adds the click event
listener to each one (menosboton[i].addEventListener('click', () =>...).
Line 612 (cantactual) gets the actual number of elements shown in the cart span. Then in line
615, the prodactual variable is assigned with the value of span when the user clicks on
.disminuir buttons, and this value is attached to the sibling <div> element located three levels
ahead. Then, it makes 'articulo' equal to 'etiqueta' of each product (prodactual =
menosboton[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling
.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();).
The if statement in line 618 subtracts -1 if the value is greater than one from the 'productual'
selected. After the subtraction, encarrito(); function is called, and the action argument
'encarrito(items[prodactual], 'disminuir');' is passed to decrease the span number.
Also, the function totales(); is called in the same fashion as the previous function call to
decrease the total cost of the order in compras.html
(totales(items[prodactual], 'disminuir');).
Then, the function mostrarcarro(); is called back again to display the current products in the
cart in compras.html DOM.
The second for loop in line 634 iterates over all class="aumentar" buttons and adds the click event
listener to each one (masboton[i].addEventListener('click', () =>...). This loop is used to
increase the numbers.
Line 637 (cantactual) gets the actual number of elements shown in the cart span. Then in line
640, the prodactual variable is assigned with the value of span when the user clicks on
.disminuir buttons, and this value is attached to the sibling <div> element located three levels
ahead. Then, it makes 'articulo' equal to 'etiqueta' of each product (prodactual =
menosboton[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling
.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();).
As this route is taken only if (items[prodactual].agregado > 1), line 643 adds +1 to the
'productual' selected. After the addition, encarrito(); function is called, and 'productual' is
passed as the argument (encarrito(items[prodactual]);) to increasese the span number.
Also, the function totales(); is called in the same fashion as the previous function call to
increase the total cost of the order in compras.html
(totales(items[prodactual]);).
Then, the function mostrarcarro(); is called back again to display the current products in the
cart in compras.html DOM.

clearSession();

This function clears all data from local storage when the user clicks on '.logout' in
layout.html, '.vaciar' and '.pagar' buttons in compras.html.

paraPagar();

This function enables buttos to pay or cancel in compras.html. This function is called when the
<body> tag is loaded (onload="paraPagar();").
This function makes visible the buttons when there are products in cart, else these buttons are
hidden: if(cantproducto > 0) {
            visible.style.display = "block";
        }else{
            visible.style.display = "none";
        }


SEPARATE FILES DESCRIPTION


1. application.py

Atop the file are the imports used to run many parts of the program, among them CS50’s SQL
module and some helper functions.
In line 25 this file ensures responses are not cached.
Lines 37 to 40 configure session to use filesystem instead of signed cookies.
From there on are the implemented routes.

suscribir route:

suscribir route uses GET and POST methods. It starts by defining what to do if POST is the method
used (line 98). If this is the case, the file uses the variable hashed to generate a hashed
password from the user input information. Then it assigns the remaining variables to handle the
information that later will be saved in the database (dbusers.db).
The variable newsletter gets the value of a checkbox. If the checkbox is checked in the form, the
variable newsletter receives the string "SI" as its value. If the checkbox is not checked, the
variable  newsletter receives the string "NO" as its value (lines 116 - 119).
Once the user has filled out the form in suscribir.html and clicks on the button suscribir, the
application.py document Introduces the information into dbusers.db (line 122). To do this it uses
db.execute from CS50 library to query dbusers.db.
Also, the user's email is determined to be the username (usuario) of the client in the database.
If a user tries to register using an existing email, line 127 is trigged as an exception and will
flash an alert indicating that the account already exists.
When the information is put into dbusers.db line 132 starts the session with the current user,
and finally, the user is redirected to the main (/) page.

login route:

Line 148 makes the application forget any opened session, so every time the login route is loaded,
this line executes.
If the method is POST, line 154 queries the database for the username introduced by the user.
Then, the if statement in line 157 checks if the username exists and the password typed in is
correct. If the information is correct, the application starts the session and remembers which
user has logged in (lines 163 - 165).
Finally, the application displays a flash message indicating that the user is successfully logged
in and redirects the user to index.html (lines 168 and 169).
The else statement in line 171 runs if the method used is GET.

micuenta route:

This route uses 'GET' and 'POST' methods. It starts by defining the variable datos. This variable
obtains the user information from dbusers.db.  Then, some other variables are declared to display
each of the data fields of dbusers.db in the form of micuenta.html.
When micuenta is reached via GET, executes the if statement in line 211. This if statement returns
the values of the variables to display them on micuenta.html.
The else statement is used when the reaching method is POST. This else statement allows clients to
change the information in each of the fields already saved in dbusers.db.
Inside this else statement are several if statements, which have the general function of updating
the information the user wants to change specifically.
For example, if the user wants to change the first name, the if statement in line 219, gets the
new name typed in the <form> tag that contains the tag <input class="inputposition" name="nombres"...>
inside compras.html, updates that information when the form is submited
db.execute("UPDATE users SET nombres = :nombres WHERE id = :id", nombres=nombres, id=session["user_id"]).
The same action is taken in most of the other if statements, except for the one in line 288, which
function is changing the newsletter preferences. When the user clicks on the button to change
information, a hidden division appears and contains two checkboxes that let the user check on one
or another depending on whether he wants to receive or not the newsletter. These checkboxes are
named newsletter and newsletterno, and they are assigned to the variables in lines 289 and 290 in
application.py.
Then lines 293 and 296 declare two if statements. Their function is to assign the string value
"SI" or "NO" depending on the user selection.
Finally, line 299 uses db.execute to update this new client information in dbusers.db.

2. dbusers.db

This file is the database that stores the information of users that have subscribed to the
website.
It contains the table users, which is used by the application to save and edit information about
users.

3. helpers.py

As in Pset9, this file ensures that users log in before visitin the routes that use the decorator.