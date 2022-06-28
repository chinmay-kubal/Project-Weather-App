var input = document.querySelector(".input_text");
var button = document.querySelector(".submit");
var main = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=61d6a70d7ef594440a0ad20d2860876e"
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));
});