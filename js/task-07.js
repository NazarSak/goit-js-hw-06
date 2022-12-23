const input = document.querySelector("#font-size-control")

const span = document.querySelector("#text")

input.addEventListener("input",onInputFunction)

function onInputFunction (event) {
span.style.fontSize = event.currentTarget.value + "px"
}

console.log(input)
console.log(span)
