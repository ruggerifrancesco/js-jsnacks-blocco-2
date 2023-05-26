console.log('JS Loaded Successfully!')

let ingredients = [];

// Add ingredient event listener
const addIngredientButton = document.getElementById("addIngredientButton");
addIngredientButton.addEventListener("click", addIngredient);

function addIngredient() {
    const ingredientInput = document.getElementById("ingredientInput");
    const ingredient = ingredientInput.value;
    ingredientInput.value = ""; // Clear the input field
    
    if (ingredient) {
        ingredients.push(ingredient);
        const ingredientList = document.getElementById("ingredientList");
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
    }
}

// Generate meal event listener
const generateMealButton = document.getElementById("generateMealButton");
generateMealButton.addEventListener("click", generateMeal);

function generateMeal() {
    const mealImage = document.getElementById("mealImage");
    mealImage.innerHTML = ""; // Clear previous meal image
  
    if (ingredients.length === 0) {
        alert("Please add ingredients first!");
        return;
    }
  
    const delay = 1000; // 2 seconds delay per ingredient
    const totalDelay = ingredients.length * delay;
  
    // Generate and display random meal image
    const randomImageUrl = "https://source.unsplash.com/400x300/?meal&t=" + Date.now();
    const img = document.createElement("img");
    img.src = randomImageUrl;
    mealImage.appendChild(img);

    const ingredientList = document.getElementById("ingredientList");
    ingredientList.innerHTML = ""; // Clear the ingredient list

  setTimeout(function() {
    alert("Meal generation complete!");
    console.log('Meal generation complete!');
  }, totalDelay);
}