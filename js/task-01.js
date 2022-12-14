
const ulGen = document.querySelector("#categories");




const liFind = ulGen.querySelectorAll(".item");

console.log("Number of categories:",liFind.length)

for (const name of liFind) {
   
    const hEl = name.querySelector("h2");
    console.log("Category:",hEl.textContent);
    const lEl = name.querySelectorAll("li");
    console.log("Elements",lEl.length)
}
















// const ulGen = document.querySelectorAll("#categories");

// const liFind = ulGen[0].querySelectorAll(".item");
// const my = liFind.querySelectorAll("h2");
// const general = `Number of categories: ${liFind.length}`;
// console.log(general);

// 1
// const hUndText = "Category:";



// const hGeneralEl = liFind[0].querySelector("h2");
// const hMeaning = hGeneralEl.textContent;
// console.log(hUndText,hMeaning);


// const liEl = liFind[0].querySelectorAll("li");
// const liInsideEl =  `Elements: ${liEl.length}`;
// console.log(liInsideEl);

// // 2

// const hGeneraTwolEl = liFind[1].querySelector("h2");
// const hTwoMeaning = hGeneraTwolEl.textContent;
// console.log(hUndText,hTwoMeaning);


// const liOneEl = liFind[1].querySelectorAll("li");
// const liInsideOneEl =  `Elements: ${liOneEl.length}`;
// console.log(liInsideOneEl);

// // 3

// const hGeneraThreelEl = liFind[2].querySelector("h2");
// const hThreeMeaning = hGeneraThreelEl.textContent;
// console.log(hUndText,hThreeMeaning);

// const liTwoEl = liFind[2].querySelectorAll("li");
// const liInsideTwoEl =  `Elements: ${liTwoEl.length}`;
// console.log(liInsideTwoEl);


// const hGeneralEl = liFind[0].querySelectorAll("h2");

