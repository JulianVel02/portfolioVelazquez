let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.value = nuevaTarea;
    inputItem.classList.add("item-input");

    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("item");

    // boton editar
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
    botonEditar.classList.add("boton-editar");

    // boton remover
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
    botonRemover.classList.add("boton-remover");

    // Agregar elementos a la lista
    nuevoDiv.appendChild(inputItem);
    nuevoDiv.appendChild(botonEditar);
    nuevoDiv.appendChild(botonRemover);
    container.appendChild(nuevoDiv);

    botonEditar.addEventListener("click", function () {
      if (inputItem.disabled === true) {
        inputItem.disabled = false;
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
      }
    });
    botonRemover.addEventListener("click", function () {
      container.removeChild(nuevoDiv);
    });
  }
}
function chequearInput() {
  if (inputPrincipal.value) {
    new Item(inputPrincipal.value);
    inputPrincipal.value = "";
  }
}
botonAgregar.addEventListener("click", chequearInput);

inputPrincipal.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    chequearInput();
  }
});