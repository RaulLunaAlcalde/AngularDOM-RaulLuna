
//EXERCICI 3
export function cambiarColor(ID) {
  var x = document.getElementById(ID);
  x = x.style.color = "yellow"
}

//EXERCICI 4

export function mida(amplada, llargada){
  var y = document.getElementById("tabla")
  y.style.width = amplada + "px"
  y.style.height = llargada + "px"
}

//EXERCICI 6

export function contarPalabras(parrafoId, contador) {
  var parrafo = document.getElementById(parrafoId);
  var resultat = document.getElementById(contador);
    var texto = parrafo.textContent || parrafo.innerText;
    var palabras = texto.split(/\s+/).length;
    resultat.textContent = "Cantidad de palabras: " + palabras;
}

//EXERCICI 7

export function afegirImatge() {
  document.getElementById('foto')
  foto.innerHTML = '<img src= "https://www.estadiodeportivo.com/imagenes/60d7c2fa-b487-44df-ac6a-53edca037f9d_1200x680.jpeg">'
}





