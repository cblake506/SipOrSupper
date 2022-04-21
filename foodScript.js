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
      let dinner = data.meals[0];

      let ingredients = [];
      ingredients.push(dinner.strIngredient1);
      ingredients.push(dinner.strIngredient2);
      ingredients.push(dinner.strIngredient3);
      ingredients.push(dinner.strIngredient4);
      ingredients.push(dinner.strIngredient5);
      ingredients.push(dinner.strIngredient6);
      ingredients.push(dinner.strIngredient7);
      ingredients.push(dinner.strIngredient8);
      ingredients.push(dinner.strIngredient9);
      ingredients.push(dinner.strIngredient10);
      ingredients.push(dinner.strIngredient11);
      ingredients.push(dinner.strIngredient12);
      ingredients.push(dinner.strIngredient13);
      ingredients.push(dinner.strIngredient14);
      ingredients.push(dinner.strIngredient15);
      ingredients.push(dinner.strIngredient16);
      ingredients.push(dinner.strIngredient17);
      ingredients.push(dinner.strIngredient18);
      ingredients.push(dinner.strIngredient19);
      ingredients.push(dinner.strIngredient20);

      let measurements = [];
      measurements.push(dinner.strMeasure1);
      measurements.push(dinner.strMeasure2);
      measurements.push(dinner.strMeasure3);
      measurements.push(dinner.strMeasure4);
      measurements.push(dinner.strMeasure5);
      measurements.push(dinner.strMeasure6);
      measurements.push(dinner.strMeasure7);
      measurements.push(dinner.strMeasure8);
      measurements.push(dinner.strMeasure9);
      measurements.push(dinner.strMeasure10);
      measurements.push(dinner.strMeasure11);
      measurements.push(dinner.strMeasure12);
      measurements.push(dinner.strMeasure13);
      measurements.push(dinner.strMeasure14);
      measurements.push(dinner.strMeasure15);
      measurements.push(dinner.strMeasure16);
      measurements.push(dinner.strMeasure17);
      measurements.push(dinner.strMeasure18);
      measurements.push(dinner.strMeasure19);
      measurements.push(dinner.strMeasure20);


      buttonEl = document.getElementById("get_dinner");

      function writeMealTitle(){
        if(!document.getElementById("mealTitle")){
          let foodTitle = document.createElement("h2");
          foodTitle.setAttribute("id", "mealTitle")
          foodTitle.innerHTML = dinner.strMeal;

          document.getElementById("Food-Section").appendChild(foodTitle)

          let olIngredients = document.createElement("ul");
          olIngredients.setAttribute("id", "foodList")
          document.getElementById("Food-Section").appendChild(olIngredients);

          for(let i = 0; i < ingredients.length; i++){
            if(ingredients[i] !== "" && ingredients[i] !== null){
              let listElIngredients = document.createElement("li");
              listElIngredients.innerHTML = measurements[i] + " " + ingredients[i];
              document.getElementById("foodList").appendChild(listElIngredients);
            }
          }
        }

      }

      buttonEl.addEventListener("click", writeMealTitle)
      
      // for(let i = 0; i < ingredients.length; i++){
      //   console.log(ingredients[i]);
      // }

    });
