const apiKEY = "8e1fbc06d030a7dcbe188e7b856f9f28";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(`${apiURL}${city}&appid=${apiKEY}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="images/snow.png"
    }
     
   document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);

})
searchbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkWeather(searchbox.value);
    }
});