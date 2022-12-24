function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color")
console.log(button)

const span = document.querySelector(".color")
console.log(span);

button.addEventListener("click",chnageColorFunction)

function chnageColorFunction () {
  const colors = getRandomHexColor();
  document.body.style.backgroundColor = colors;
  span.textContent = colors 
 

}