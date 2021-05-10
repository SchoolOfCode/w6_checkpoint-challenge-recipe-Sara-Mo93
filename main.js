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
const recipes = data.hits[0, 1, 2, 3, 4, 5];
recipeName.innerHTML = foodToSearch
calorieInformation.innerHTML += recipes.recipe.calories;
recipeName.innerText= recipes.recipe.label;
linkButton.href= recipes.recipe.url;gi
recipeImage.innerText= recipes.recipe.healthLabels.image;
console.log(data.hits);


// food.map((recipes)=> { foodToSearch += recipes.recipe.label;

// });
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

