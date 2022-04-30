var ageValid = localStorage.getItem("ageValid");
if (!ageValid || ageValid === "false") {
  $(".ui.basic.modal").modal("show");
  document.getElementById("food-box").className = "ui center aligned twelve wide column drink-column";
} else {
  $("#drink-section").css("display", "block");
  $(".drink-section-button").css("display", "inline-block");
  document.getElementById("food-box").className = "ui center aligned six wide column drink-column";
}
$("#ageFalse").on("click", setAgeFalse);
$("#ageTrue").on("click", setAgeTrue);
function setAgeFalse() {
  localStorage.setItem("ageValid", "false");
  document.getElementById("food-box").className = "ui center aligned twelve wide column drink-column";
  return;
}
function setAgeTrue() {
  localStorage.setItem("ageValid", "true");
  $("#drink-section").css("display", "block");
  $(".drink-section-button").css("display", "inline-block");
  document.getElementById("food-box").className = "ui center aligned six wide column drink-column";
  return;
}
function writeDrinkTitle() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let ingredients1 = [];
      let measurements1 = [];
      let beverage;
      beverage = data.drinks[0];
      for (var i = 1; i <= 15; i++) {
        ingredients1.push(beverage["strIngredient" + i.toString()]);
      }
      for (var i = 1; i <= 15; i++) {
        measurements1.push(beverage["strMeasure" + i.toString()]);
      }
      document.getElementById("title1").innerHTML =
        "<h3>" + beverage.strDrink + "</h3>";
      document.getElementById("drink-results").innerHTML =
        '<br><div id="drinkList"></div>';
      document
        .getElementById("drink-image")
        .setAttribute("src", beverage.strDrinkThumb);
      cleanInstructions1 = beverage.strInstructions;
      //display the instructions
      document
        .getElementById("drink-results")
        .insertAdjacentHTML("beforeend", "<h3> Instructions </h3>");
      document
        .getElementById("drink-results")
        .insertAdjacentHTML("beforeend", "<p>" + cleanInstructions1 + "<p>");
      for (let i = 0; i < ingredients1.length; i++) {
        if (ingredients1[i] !== "" && ingredients1[i] !== null) {
          let listElIngredients = document.createElement("div");
          listElIngredients.innerHTML =
            measurements1[i] + " " + ingredients1[i];
          document.getElementById("drinkList").appendChild(listElIngredients);
        }
      }
    });
}
function main1() {
  buttonEl = document.getElementById("get_drink");
  buttonEl.addEventListener("click", writeDrinkTitle);
}
main1();
function writeMealTitle() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let ingredients = [];
      let measurements = [];
      let dinner;
      dinner = data.meals[0];
      for (var i = 1; i <= 20; i++) {
        ingredients.push(dinner["strIngredient" + i.toString()]);
      }
      for (var i = 1; i <= 20; i++) {
        measurements.push(dinner["strMeasure" + i.toString()]);
      }
      document.getElementById("title").innerHTML =
        "<h3>" + dinner.strMeal + "</h3>";
      document.getElementById("results").innerHTML =
        '<br><div id="foodList"></div>';
      document
        .getElementById("dinner-image")
        .setAttribute("src", dinner.strMealThumb);
      if (dinner.strYoutube !== "") {
        //html embeded youtube video format
        firstHalfStr = '<iframe src="https://www.youtube.com//embed/';
        secondHalfStr = '"></iframe>';
        //extract the 11 digit video ID from the full link provided in the API
        //only keep the 11 digit ID and none of the additional identifiers
        videoID = dinner.strYoutube.slice(32,43);

        document
          .getElementById("results")
          .insertAdjacentHTML(
            "beforeend",
            firstHalfStr + videoID + secondHalfStr
          );
      }
      //remove non-standard characters from the instructions
      cleanInstructions = dinner.strInstructions.replace(
        /[\u{0080}-\u{FFFF}]/gu,
        ""
      );
      //display the instructions
      document
        .getElementById("results")
        .insertAdjacentHTML("beforeend", "<h3> Instructions </h3>");
      document
        .getElementById("results")
        .insertAdjacentHTML("beforeend", "<p>" + cleanInstructions + "<p>");
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] !== "" && ingredients[i] !== null) {
          let listElIngredients = document.createElement("div");
          listElIngredients.innerHTML = measurements[i] + " " + ingredients[i];
          document.getElementById("foodList").appendChild(listElIngredients);
        }
      }
    });
}
function main() {
  buttonEl = document.getElementById("get_dinner");
  buttonEl.addEventListener("click", writeMealTitle);
}
main();
var getFoodAndDrink = document.getElementById("get_both");
getFoodAndDrink.addEventListener("click", writeDrinkTitle);
getFoodAndDrink.addEventListener("click", writeMealTitle);