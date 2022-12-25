// const general = document.querySelector("#validation-input");

// const my = general.getAttribute("data-length")






// function onBlurFunction (event) {
//     if (event.currentTarget.value.length === my) {
//         general.classList.add("valid");
//         general.classList.remove("invalid")  
      
//     }
//     else {
//         general.classList.add("invalid")
//       general.classList.remove("valid")  
    
//     }
// }





const textInput = document.querySelector("input");

textInput.addEventListener("blur", handler);

function handler (event) {
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }

};
