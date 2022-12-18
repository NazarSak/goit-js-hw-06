const refs = {
input : document.querySelector("#name-input"),
span : document.querySelector("#name-output")
}

refs.input.addEventListener("input", onInputChange);



function onInputChange(event) {
refs.span.textContent = event.currentTarget.value;

if (refs.input = "") {
 return  refs.span.textContent = "mus" 
}

}

console.log(refs.input);
console.log(refs.span);
