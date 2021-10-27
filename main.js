const APP_ID = "f9a8cc79";
const APP_KEY = "ce118f0a4e97bdffc78a0ab134eec3ea";
let informationSection = document.getElementById("food-display");

let foodToSearch = null;
function handleRecipeClick() {
	fetchRecipe(foodToSearch);
	return foodToSearch;
}

function handleFoodChange() {
	foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
	const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
	const response = await fetch(requestUrl);
	let { hits } = await response.json();
	for (let i = 0; i < hits.length; i++) {
		HTMLDisplay(hits[i].recipe);
	}
}

function HTMLDisplay(data) {
	let calorieInformation = document.createElement("p");
	let diet = document.createElement("p");
	let cuisine = document.createElement("p");
	let linkTag = document.createElement("a");
	let recipeName = document.createElement("h1");
	let recipeImage = document.createElement("img");

	// console.log(data.calories);

	recipeImage.src = data.image;
	calorieInformation.innerHTML = "Calories:" + data.calories.toFixed(0);
	calorieInformation;
	diet.innerText = "Diet:" + data.dietLabels;
	cuisine.innerText = "Cuisine:" + data.cuisineType;
	recipeName.innerText = data.label;
	linkTag.innerHTML = "Follow this recipe 🍽️";
	linkTag.href = data.url;

	informationSection.appendChild(cuisine);
	informationSection.appendChild(calorieInformation);
	informationSection.appendChild(recipeName);
	informationSection.appendChild(recipeImage);
	informationSection.appendChild(linkTag);
	informationSection.appendChild(diet);
	console.log(data);
}
