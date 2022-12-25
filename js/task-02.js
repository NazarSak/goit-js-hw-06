const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//  const ul = document.querySelector("#ingredients");
 

//    ul.append(
//   ...ingredients.map((item) => {
//     let itemList = document.createElement("li");
//     itemList.textContent = item;
//     return itemList;
//   })
// );

  


const list = document.querySelector("#ingredients");

list.append(...ingredients.map((item) => {
  let itemList = document.createElement("li");
  itemList.textContent = item;
  return itemList;
})
)







// let ul = document.querySelector("#ingredients");

// let letEl = document.createElement("li");
// letEl.textContent = ingredients

// for (const name of ingredients) {

 
// }
// ul.appendChild(letEl);



// console.log(liEl)
// ul.appendChild(liEl)










