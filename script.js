const APP_ID = "f9a8cc79";
const APP_KEY = "ce118f0a4e97bdffc78a0ab134eec3ea";
let informationSection = document.getElementById("food-display");



// let calorieInformation= document.getElementById("info")
// let linkButton= document.getElementById("view-button")
// let recipeName= document.getElementById("recipe-label")
// let recipeImage= document.getElementById("image")
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
let {hits} = await response.json();
// const recipeHits = data.hits[0];
// calorieInformation.innerHTML += recipeHits.recipe.calories;
// recipeName.innerText= recipeHits.recipe.label;
// linkButton.href= recipeHits.recipe.url;
// recipeImage.src= recipeHits.recipe.image;
// console.log(hits);
for (let i = 0; i < hits.length; i ++) {
  displayRecipe(hits[i].recipe);
}
}


function displayRecipe(recipe) {
  let calorieInformation= document.createElement("p")
  let linkButton= document.createElement("button")
  let recipeName= document.createElement("h1")
  let recipeImage= document.createElement("img")

  calorieInformation.innerHTML= recipe.recipe.calories;
  recipeName.innerText= recipe.recipe.label;
  linkButton.href= recipe.url;
  recipeImage.src= recipe.image;
  informationSection.appendChild(linkButton, calorieInformation, recipeName, recipeImage);

}



