// All GLOBAL VARIABLES' DECLARATION
const getDataBtn = document.querySelector("#get-data");
const details = document.querySelector("#details");
const cityName = document.querySelector("#city");
let temperature;
let windspeed;
let humidity;
var output = "";

// API key: bfc7419b131261eed1acebb37cf82d1c
// API url: api.openweathermap.org/data/2.5/weather?q={city name}&appid={bfc7419b131261eed1acebb37cf82d1c} 

function getData() {
  if (cityName.value === "") {
    alert("Enter the city name");
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=0f00a6c644d9b05ad296586d8e490a70`;
  fetch(url)
  .then(response => {if(response.status < 200 || response.status >= 300) {alert("CITY NOT SUPPORTED BY API")}; return response.json()})
  .then(data => {
    temperature = data.main.temp;
    humidity = data.main.humidity;
    windspeed = data.wind.speed;
    document.querySelector("#temperature h1").innerHTML = temperature;
    document.querySelector("#humidity h1").innerHTML = humidity;
    document.querySelector("#windspeed h1").innerHTML = windspeed;
  });
  document.querySelector("#city-name").innerHTML = cityName.value;
  cityName.value = "";
  details.style = "display: block;";
}

getDataBtn.addEventListener("click", getData);