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
var element = document.getElementById("recipe-label");
element.innerHTML = recipe.recipe.label;
element.href = recipe.recipe.url;

console.log(data.hits);
}

async function fetchRecipe(food) {
  const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
  const response = await fetch (requestUrl);
  const data = await response.json();
  const recipes = data.hits[0, 1, 2, 3, 4, 5]; 
  food.map((recipes)=> { foodToSearch += recipes.recipe.label;
  });
  recipeName.innerHTML = foodToSearch
  // calorieInformation.innerHTML += recipes.recipe.calories;
  // recipeName.innerText= recipes.recipe.label;
  // linkButton.href= recipes.recipe.url;
  // console.log(data.hits);
  }
  
  
  
