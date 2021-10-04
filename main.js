let currentCityEl = document.getElementById('currenty-city');
let currentTempEl = document.getElementById('current-temp');
let currentWindEl = document.getElementById('current-wind');
let currentHumidityEl = document.getElementById('current-humidity');
let currentUvEl = document.getElementById('current-UV');











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
      
  
      fetch(currentWeatherURL).then(response => {
          if(response.ok) {
              response.json().then(data => {

                console.log("Weather DATA", data);
                currentCityEl.textContent = data.name;
                currentTempEl.textContent = data.main.temp + " C";
                currentWindEl.textContent = data.wind.speed + " Km/h";
                currentHumidityEl.textContent = data.main.humidity + " %";
                currentUvEl.textContent = uvData.value;

                
                
        
                let coords = {
                  lat: data.coord.lat,
                  lon: data.coord.lon,
                };
        
                getFiveDayForecast(coords);
              })
          }
      }
        
    )
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
  
        //   for i = 1; i < data.daily.length; i++) {
        //     console.log(data.daily);
        //   }
        });
    }
});