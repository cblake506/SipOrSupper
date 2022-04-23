function writeDrinkTitle() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks);
      let ingredients1 = [];
      let measurements1 = [];
      let beverage;
      beverage = data.drinks[0];

      for (var i = 1; i <= 20; i++) {
        ingredients1.push(beverage['strIngredient1' + i.toString()])
      }
      for (var i = 1; i <= 20; i++) {
        measurements1.push(beverage['strMeasure1' + i.toString()])
      }

        document.getElementById("title1").innerHTML = "<div>"+beverage.strDrink+"</div>";
        document.getElementById("results1").innerHTML = '<ul id="drinkList"></ul>';

        for (let i = 0; i < ingredients1.length; i++) {
          if (ingredients1[i] !== "" && ingredients1[i] !== null) {
            let listElIngredients1 = document.createElement("li");
            listElIngredients1.innerHTML = measurements1[i] + " " + ingredients1[i];
            document.getElementById("drinkList").appendChild(listElIngredients1);
          }
        }
    });
}

function main() {
  buttonEl = document.getElementById("get_drink");
  buttonEl.addEventListener("click", writeDrinkTitle)
}

main();



function writeMealTitle() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.meals);
      let ingredients = [];
      let measurements = [];
      let dinner;
      dinner = data.meals[0];

      for (var i = 1; i <= 20; i++) {
        ingredients.push(dinner['strIngredient' + i.toString()])
      }
      for (var i = 1; i <= 20; i++) {
        measurements.push(dinner['strMeasure' + i.toString()])
      }

        document.getElementById("title").innerHTML = "<div>"+dinner.strMeal+"</div>";
        document.getElementById("results").innerHTML = '<ul id="foodList"></ul>';

        for (let i = 0; i < ingredients.length; i++) {
          if (ingredients[i] !== "" && ingredients[i] !== null) {
            let listElIngredients = document.createElement("li");
            listElIngredients.innerHTML = measurements[i] + " " + ingredients[i];
            document.getElementById("foodList").appendChild(listElIngredients);
          }
        }
    });
}

function main() {
  buttonEl = document.getElementById("get_dinner");
  buttonEl.addEventListener("click", writeMealTitle)
}

main();



