// Galery Controls
var numDiapositiva = 1;

// Call mostrarDispositiva(numDiapositiva) and passes numDiapositiva argument.
// Set initially to display photo No. 1.
mostrarDispositiva(numDiapositiva);

// Function to increase or decrease the number of the slide.
// and move forward or backwards through the photos when
// <a> class="next" or class="prev" is clicked (1 or -1)
function diapositivas(n) {
  mostrarDispositiva(numDiapositiva += n);
}

// Function to display the current slide. Receives the argument
// sent by class="miniatura" <img> is clicked
function diaSeleccionada(n) {
  mostrarDispositiva(numDiapositiva = n);
}

function mostrarDispositiva(n) {
  // Variables to get the parameters from colecciones.html
  let i;
  let imagenes = document.getElementsByClassName("fotos");
  let miniaturas = document.getElementsByClassName("miniatura");
  let indice = document.getElementById("indiceDiapositiva");
  // Display the first slide after moving forward from the last one
  if (n > imagenes.length) {numDiapositiva = 1}
  // Display the last slide after moving backwards from the first one
  if (n < 1) {numDiapositiva = 4}
  // Loop through the images and hide them
  for (i = 0; i < imagenes.length; i++) {
      imagenes[i].style.display = "none";
  }
  // Loop through miniaturs and activate miniature of photo which is been displayed
  for (i = 0; i < miniaturas.length; i++) {
      miniaturas[i].className = miniaturas[i].className.replace(" active", "");
  }
  // Display the current photo
  imagenes[numDiapositiva-1].style.display = "block";
  // Display the current miniature
  miniaturas[numDiapositiva-1].className += " active";
  // Display the current index of the current photo and miniature
  indice.innerHTML = miniaturas[numDiapositiva-1].alt;
}
