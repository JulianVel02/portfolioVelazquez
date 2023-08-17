let numCuadrados = 6;
let colors = generateRandomColors(numCuadrados);
let colorDisplay = document.getElementById("colorDisplay");
let mensaje = document.querySelector("#message");
let cuadrados = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");
let pickedColor = pickColor();
let btnReset = document.querySelector("#reset");
let btnFacil = document.getElementById("facil");
let btnDificil = document.getElementById("dificil");
colorDisplay.textContent = pickedColor;

//boton facil
facil.addEventListener("click", function () {
  dificil.classList.remove("selected");
  facil.classList.add("selected");
  numCuadrados = 3;
  colors = generateRandomColors(numCuadrados);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.background = colors[i];
    } else {
      cuadrados[i].style.display = "none";
    }
  }
  h1.style.background = "#b8b8b8";
});

//boton dificil
dificil.addEventListener("click", function(){
  btnFacil.classList.remove("selected");
  btnDificil.classList.add("selected");
  numCuadrados = 6;
  colors = generateRandomColors(numCuadrados);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].style.background = colors[i];
      cuadrados[i].style.display = "block";
  }
  h1.style.background = "#b8b8b8";
});

// boton reset
btnReset.addEventListener("click", function () {
  btnReset.style.outline = "none";
  colors = generateRandomColors(numCuadrados);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  btnReset.textContent = "Nuevos Colores";
  mensaje.textContent = " ";
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "#531CB3";
});

//juego
for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.background = colors[i];
  cuadrados[i].addEventListener("click", function () {
    let clickedColor = this.style.background;
    console.log(clickedColor);
    if (clickedColor === pickedColor) {
      mensaje.textContent = "Acertaste!!";
      changeColors(clickedColor);
      btnReset.textContent = "Play Again?";
      h1.style.backgroundColor = clickedColor;
    } else {
      cuadrados[i].style.transition = "0.5s";
      cuadrados[i].style.backgroundColor = "#232323";
      mensaje.textContent = "Intentalo de nuevo";
    }
  });
}

// funciones para que funcione el juego
function changeColors(colors) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.background = colors;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return (rgbColor = `rgb(${r}, ${g}, ${b})`);
}
