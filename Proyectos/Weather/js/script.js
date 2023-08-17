let boton = document.querySelector("button")
let ciudad = document.querySelector("input")
let enter = document.querySelector(".enter")

function cargarCiudad() {
    if (ciudad.value === "") {
        alert("Por favor ingrese una ciudad")
    } else {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.value + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function (data) {

            console.log(data)
            document.querySelector(".container").style.visibility = "visible"
            document.querySelector("#ciudad").textContent = data.name
            document.querySelector("#temperatura").textContent = data.main.temp
            document.querySelector("#wicon").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
            document.querySelector("#descripcion").textContent = data.weather[0].description

        }
        ).fail(function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 404) {
                alert('¡Error! Esa ciudad no es valida, intente otra vez.');
            }
        });
    }
    ciudad.value = ""
}

boton.addEventListener("click", cargarCiudad)
