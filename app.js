let input = document.querySelector(".input_text");
let button = document.querySelector(".submit");
let main = document.querySelector(".name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=61d6a70d7ef594440a0ad20d2860876e"
  )
    .then((response) => response.json())
    .then((data) => {
      let tempValue = data["main"]["temp"];
      let nameValue = data["name"];
      let descValue = data["weather"][0]["description"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));
});
