let numCuadrados = 6;
let colors = generateRandomColors(numCuadrados);
let colorDisplay = document.getElementById("colorDisplay");
let mensaje = document.querySelector("#message");
let cuadrados = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");
let pickedColor = pickColor();
let resetButton = document.querySelector("#reset");
let facil = document.querySelector("#facil");
let dificil = document.querySelector("#dificil");


// boton facil
facil.addEventListener("click", function(){
  dificil.classList.remove("selected");
  facil.classList.add("selected");
  numCuadrados = 3;
  colors = generateRandomColors(numCuadrados);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.background = colors[i];
    } else {
      cuadrados[i].style.display = "none";
    }
  }
  h1.style.background = "#b8b8b8";
});

// boton dificil
dificil.addEventListener("click", function(){
  facil.classList.remove("selected");
  dificil.classList.add("selected");
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

// reseteo
resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numCuadrados);

  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "Nuevos colores";
  mensaje.textContent = "";

  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.background = colors[i];
  }
  h1.style.background = "#b8b8b8";
})

colorDisplay.textContent = pickedColor;


// Juego y agregar color
for(let i = 0; i < cuadrados.length; i++) {
   
  cuadrados[i].style.background = colors[i];
  cuadrados[i].addEventListener("click", function() {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      mensaje.textContent = "¡Correcto!";
      resetButton.textContent = "¿Jugar de nuevo?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }else{
      this.style.background = "#252525";
      mensaje.textContent = "Intentalo Nuevamente";
      this.style.boxShadow = "none"

    }
  })
}

function changeColors(color){
for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.background = color;
}

}

function pickColor(){
let random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}

