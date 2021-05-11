const APP_ID = "f9a8cc79";
const APP_KEY = "ce118f0a4e97bdffc78a0ab134eec3ea";
let calorieInformation= document.getElementById("info")
let linkButton= document.getElementById("view-button")
let recipeName= document.getElementById("recipe-label")
let recipeImage= document.getElementById("image")
let foodToSearch = null;

function handleRecipeClick() {
fetchRecipe(foodToSearch);
}

function handleFoodChange() {
foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
const response = await fetch (requestUrl);
const data = await response.json();
const recipeHits = data.hits[0];

calorieInformation.innerHTML +=  recipeHits.recipe.calories;
recipeName.innerText= recipeHits.recipe.label;
linkButton.href= recipeHits.recipe.url;
recipeImage.src= recipeHits.recipe.image;
console.log(data.hits);
}




//  data.hits.foreach(addToHtml)
// PLAN
// Use the fetchRecipe function to make a fetch request to edamam
// the food the function takes in entered as a search query
// use the first recipe from the hits array in the data that you receive
// use inner.html- to set the id#"" to the recipe name
// set the href of #recipe-link to be the recipe's url, also from the received data.
//

