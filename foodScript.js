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

      for (var i = 1; i <= 15; i++) {
        ingredients1.push(beverage['strIngredient' + i.toString()])
      }
      for (var i = 1; i <= 15; i++) {
        measurements1.push(beverage['strMeasure' + i.toString()])
      }

      document.getElementById("title1").innerHTML = "<div>" + beverage.strDrink + "</div>";
      document.getElementById("results1").innerHTML = '<ul id="drinkList"></ul>';
      document.getElementById("drink-image").setAttribute('src', beverage.strDrinkThumb);

      for (let i = 0; i < ingredients1.length; i++) {
        if (ingredients1[i] !== "" && ingredients1[i] !== null) {
          let listElIngredients = document.createElement("li");
          listElIngredients.innerHTML = measurements1[i] + " " + ingredients1[i];
          document.getElementById("drinkList").appendChild(listElIngredients);
        }
      }
    });
}

function main1() {
  buttonEl = document.getElementById("get_drink");
  buttonEl.addEventListener("click", writeDrinkTitle)
}

main1();


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
      
      document.getElementById("title").innerHTML = "<div>" + dinner.strMeal + "</div>";
      document.getElementById("results").innerHTML = '<ul id="foodList"></ul>'
      
      if(dinner.strYoutube !== ""){
        //html embeded youtube video format
        firstHalfStr = '<iframe src="https://www.youtube.com//embed/';
        secondHalfStr = '"></iframe>';

        //extract the 11 digit video ID from the full link provided in the API
        //remove the start of the URL
        youtubeUrl = dinner.strYoutube.replace('https://www.youtube.com/watch?v=', "");
        //only keep the 11 digit ID and none of the additional identifiers
        youtubeUrl = youtubeUrl.slice(0, 11);

        console.log(firstHalfStr + youtubeUrl + secondHalfStr)
        document.getElementById("results").insertAdjacentHTML('beforeend', firstHalfStr + youtubeUrl + secondHalfStr);
      }

      //remove non-standard characters from the instructions
      cleanInstructions = dinner.strInstructions.replace(/[\u{0080}-\u{FFFF}]/gu,"");
      //display the instructions
      document.getElementById("results").insertAdjacentHTML('afterbegin', cleanInstructions);

      
      

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

var getFoodAndDrink = document.getElementById('get_both');

getFoodAndDrink.addEventListener("click", writeDrinkTitle);
getFoodAndDrink.addEventListener("click", writeMealTitle);
