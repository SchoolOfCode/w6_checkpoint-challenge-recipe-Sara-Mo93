
const APP_ID = "f9a8cc79";
const APP_KEY = "ce118f0a4e97bdffc78a0ab134eec3ea";

let foodToSearch = null;



function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}
function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}
async function fetchRecipe(food) {
const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
const response = await fetch (requestUrl);
const data = await response.json();
const recipe = data.hits[0];
let element = document.getElementById("recipe-label");
element.innerHTML = recipe.recipe.label;
element.href = recipe.recipe.url;
console.log(data.hits);
}



// function addToHtml (searchResults)
// //  loop through array
// // add the data to the created html 
// let element = 







//  data.hits.foreach(addToHtml)
// PLAN
// Use the fetchRecipe function to make a fetch request to edamam
// the food the function takes in entered as a search query
// use the first recipe from the hits array in the data that you receive
// use inner.html- to set the id#"" to the recipe name
// set the href of #recipe-link to be the recipe's url, also from the received data.
//

