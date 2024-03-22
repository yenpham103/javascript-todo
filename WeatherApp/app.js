var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

async function changeWeatherUI(capitalSearch) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=416e57ea68f73875c81f5d826069948b`;

  let data = await fetch(apiUrl).then((res) => res.json());
  console.log(data);
  if (data.cod === 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "m/s";
    value.innerText = Math.floor(data.main.temp - 273.15);
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    console.log(shortDesc.innerText);
    time.innerText = new Date().toLocaleString("vi");
    body.setAttribute("class", "hot");
    if (value.innerText < 25) {
      body.setAttribute("class", "warn");
    }
    if (value.innerText <= 22) {
      body.setAttribute("class", "cold");
    }
    if (value.innerText <= 19) {
      body.setAttribute("class", "cool");
    }
  } else {
    content.classList.add("hide");
  }
}
search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    console.log(capitalSearch);
    changeWeatherUI(capitalSearch);
  }
});
changeWeatherUI("Ha Noi");
