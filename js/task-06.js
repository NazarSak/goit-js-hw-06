const general = document.querySelector("#validation-input");

const my = general.getAttribute("data-length")




general.addEventListener("blur",onBlurFunction);

function onBlurFunction (event) {
    if (event.currentTarget.value.length === my) {
        
        general.classList.add("valid");

    } else  {
    
        general.classList.add("invalid");
        
    }
}


// if (event.currentTarget.value.length === my) {
        
//     general.classList.add("valid");

//     if (general.classList.contains("invalid")) {
//       general.classList.remove("invalid")  
//     }

// } else  {

//     if (general.classList.contains("valid")) {
//         general.classList.remove("valid")  
//       }

//     general.classList.add("invalid");
    
// }
// }
