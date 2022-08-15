//Get the button
var mybutton = document.getElementById("bttButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backtotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Enable buttons when forms are complete
function enable() {
    var gets = document.forms["form"].elements;
    var enable = true;

    for (var i = 0; i < gets.length; i++) {
        if (gets[i].value.length == 0) enable = false;
    }

    if (enable) {
        document.getElementById('submitbtn').disabled = false;
    }
}

// Disable one option when another is selected with a checkmark.
// Used in micuenta.html, newsletter
function disableno() {
    alert("Con esta opción usted recibirá nuestras noticias de actualidad")
    document.getElementById("newsletterno").disabled = true;
    }

function disable() {
    alert("Con esta opción usted dejará de recibir nuestras noticias de actualidad")
    document.getElementById("newsletter").disabled = true;
}

function habeliminar() {
    alert("ALERTA! Esta acción no se puede revertir")
    document.getElementById("elimdefinitivo").disabled = false;
}

// Verifies password and confirms password are identical
function validation() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmation]');

    if (confirm.value === password.value) {
    confirm.setCustomValidity('');
    }
    else {
    confirm.setCustomValidity('Las Contraseñas no Coinciden!');
  }
}

// Functions to make appear fields and submit buttons when user changes information on his account
function appearnombres() {
    var visible = document.getElementById("hidden1");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearapellidos() {
    var visible = document.getElementById("hidden2");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appeardirenvio() {
    var visible = document.getElementById("hidden3");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearciudadenvio() {
    var visible = document.getElementById("hidden4");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appeardirfact() {
    var visible = document.getElementById("hidden5");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearciudadfact() {
    var visible = document.getElementById("hidden6");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearpais() {
    var visible = document.getElementById("hidden7");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearcorreo() {
    var visible = document.getElementById("hidden8");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appeartelefono() {
    var visible = document.getElementById("hidden9");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearnews() {
    var visible = document.getElementById("hidden10");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appearpassword() {
    var visible = document.getElementById("hidden11");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}

function appeareliminar() {
    var visible = document.getElementById("hidden12");
    alert("Esta Acción Eliminará su Cuenta de Usuario y Todos Sus Datos de Nuestra Base de Datos")
    if (visible.style.display === "none") {
        visible.style.display = "block";
    }
    else {
        visible.style.display = "none"
    }
}


// Hide elements hidden11 and hidden12 when clicking on cancel button

function hidenews() {
    var visible = document.getElementById("hidden10");
    if (visible.style.display === "block") {
        visible.style.display = "none";
    }
}

function hide() {
    var visible = document.getElementById("hidden11");
    if (visible.style.display === "block") {
        visible.style.display = "none";
    }
}

function hide1() {
    var visible = document.getElementById("hidden12");
    if (visible.style.display === "block") {
        visible.style.display = "none";
    }
}

function alertaCompra() {
    alert("Al hacer click se procede al pago de sus productos");
}