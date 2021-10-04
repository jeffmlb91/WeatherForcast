//using Jquery for the project
$(document).ready(function () {
    var apiKey = "47b120c524cc8fed012b7e7f808dd579";
  
    $("#search-button").on("click", function (e) {
      e.preventDefault();
  
      let userSearch = $("#city-search").val();
      console.log(userSearch);
  
      getCurrentWeather(userSearch);
    });
  
    function getCurrentWeather(userSearch) {
      console.log("userSearch inside getCurrentWEather", userSearch);
  
      let currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${apiKey}&units=metric`;
  
      fetch(currentWeatherURL)
        .then((response) => response.json())
        .then(function (data) {
          console.log("Weather DATA", data);
          let title = $("<h2>").text(data.name);
          let temp = $("<h3>").text("Temperature: " + data.main.temp + "C");
          let humidity = $("<h3>").text("Humidity: " + data.main.humidity + "%");
          let wind = $("<h3>").text("Wind: " + data.wind.speed + " Km/h");
  
          $("#current-weather").append(title, temp, humidity, wind);
  
          let coords = {
            lat: data.coord.lat,
            lon: data.coord.lon,
          };
  
          getFiveDayForecast(coords);
        });
    }
  
    function getFiveDayForecast(coords) {
      console.log("coords in getFiveDay", coords);
  
      let fiveDayWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;
  
      fetch(fiveDayWeatherURL)
        .then((response) => response.json())
        .then(function (data) {
          console.log("FIVEDAY DATA", data);
  
          let card = $("<div class='card col-md-2'>");
          let cardHeader = $("<div class='card-header'>");
          let cardBody = $("<div class='card-body'>");
          let cardTitle = $("<div class='card-title'>");
  
          for (var i = 1; i < data.daily.length; i++) {
            console.log(data.daily);
          }
        });
    }
  });