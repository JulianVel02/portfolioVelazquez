$.getJSON(" https://api.chucknorris.io/jokes/random", function(data){
    document.querySelector("h2").textContent = data.value
})

let btnActualizar = document.querySelector("button")

btnActualizar.addEventListener("click", function() {
    $.getJSON(" https://api.chucknorris.io/jokes/random", function(data){
    document.querySelector("h2").textContent = data.value
})
})