const refs = {
input : document.querySelector("#name-input"),
span : document.querySelector("#name-output")
}

refs.input.addEventListener("input", onInputChange);



function onInputChange(event) {
refs.span.textContent = event.currentTarget.value;

if (event.currentTarget.value === "") {
 return  refs.span.textContent = "Anonymous" ;
}

}

console.log(refs.input);
console.log(refs.span);
