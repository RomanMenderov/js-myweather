/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

import { saveCityToHistory, userHistory } from "./history";
import { getUserCity, getWeatherCity, getMapCityUrl } from "./api";

export async function showMyWeather() {
  const userCity = await getUserCity();
  const myWeather = await getWeatherCity(userCity);
  return (
    showWetherResults(userCity, myWeather),
    showMyMapResults(getMapCityUrl(myWeather.coord))
  );
}

export function showUserHistory(
  array,
  historyElement = document.getElementById("cityList")
) {
  historyElement.innerHTML = "";
  return array.forEach((element) => {
    const domElem = document.createElement("li");
    domElem.innerText = element;
    domElem.addEventListener("click", async () => {
      const question = domElem.innerText;
      const myWeather = await getWeatherCity(question);
      if (myWeather) {
        showWetherResults(question, myWeather);
        showMyMapResults(getMapCityUrl(myWeather.coord));
      }
    });
    historyElement.appendChild(domElem);
  });
}

export function showWetherResults(
  cityName,
  weatherObj,
  weatherElement = document.getElementById("weatherCurrentParams"),
  cityElement = document.getElementById("weatherCurrentCity")
) {
  if (typeof weatherObj === "string") {
    cityElement.innerHTML = `${cityName}`;
    weatherElement.innerText = weatherObj;
  } else {
    const icoURL = `https://openweathermap.org/img/w/
${weatherObj.weather[0].icon}.png`;
    cityElement.innerHTML = `${cityName}&nbsp;<img width="50" src="${icoURL}">`;
    weatherElement.innerText = `Температура: ${JSON.stringify(
      weatherObj.main.temp
    )}`;
  }
}

export function showMyMapResults(
  myUrl,
  mapElement = document.getElementById("weatherMap")
) {
  if (myUrl) {
    mapElement.src = myUrl;
    mapElement.style.display = "block";
  }
  return false;
}

export async function getWeatherFromCityElement(element) {
  const cityName = element.innerText;
  const weather = await getWeatherCity(cityName);
  return showWetherResults(cityName, weather);
}

export function addWeatherForm(el) {
  const weatherBlock = document.createElement("div");
  weatherBlock.id = "weatherDescription";

  const weatherCurrentCity = document.createElement("span");
  weatherCurrentCity.id = "weatherCurrentCity";
  weatherBlock.appendChild(weatherCurrentCity);

  const weatherCurrentParams = document.createElement("p");
  weatherCurrentParams.id = "weatherCurrentParams";
  weatherBlock.appendChild(weatherCurrentParams);

  el.appendChild(weatherBlock);

  const input = document.createElement("input");
  input.id = "input";
  el.appendChild(input);

  const button = document.createElement("button");
  button.id = "button";
  button.innerText = "Проверить погоду";
  el.appendChild(button);

  const weatherMap = document.createElement("img");
  weatherMap.id = "weatherMap";
  weatherMap.src = "";
  weatherMap.width = "400";
  weatherMap.height = "400";
  weatherMap.style.display = "none";
  el.appendChild(weatherMap);

  const cityList = document.createElement("ul");
  cityList.id = "cityList";
  el.appendChild(cityList);

  button.addEventListener("click", async () => {
    const question = input.value;
    input.value = "";
    const myWeather = await getWeatherCity(question);
    if (myWeather) {
      showWetherResults(
        question,
        myWeather,
        weatherCurrentParams,
        weatherCurrentCity
      );
      saveCityToHistory(question);
      showUserHistory(userHistory, cityList);
      showMyMapResults(getMapCityUrl(myWeather.coord), weatherMap);
    } else {
      showWetherResults(
        question,
        "по этому запросу нет данных",
        weatherCurrentParams,
        weatherCurrentCity
      );
    }
  });
}
