/* eslint-disable no-param-reassign */

import { saveCityToHistory, userHistory } from "./history";
import { getUserCity, getWeatherCity, getMapCityUrl } from "./api";

export function showUserHistory(
  array,
  historyElement = document.querySelector(".cityList")
) {
  historyElement.innerHTML = "";
  return array.forEach((element) => {
    const domElem = document.createElement("li");
    domElem.innerText = element;
    historyElement.appendChild(domElem);
  });
}

export function showWetherResults(
  cityName,
  weatherObj,
  weatherElement = document.querySelector(".weatherCurrentParams"),
  cityElement = document.querySelector(".weatherCurrentCity")
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
  mapElement = document.querySelector(".weatherMap")
) {
  if (myUrl) {
    mapElement.src = myUrl;
    mapElement.style.display = "block";
  }
  return false;
}

export async function showMyWeather() {
  const userCity = await getUserCity();
  const myWeather = await getWeatherCity(userCity);
  return (
    showWetherResults(userCity, myWeather),
    showMyMapResults(getMapCityUrl(myWeather.coord))
  );
}

export async function getWeatherFromCityElement(element) {
  const cityName = element.innerText;
  const weather = await getWeatherCity(cityName);
  return showWetherResults(cityName, weather);
}

export function addWeatherForm(el) {
  const weatherBlock = document.createElement("div");
  weatherBlock.classList.add("weatherDescription");

  const weatherCurrentCity = document.createElement("span");
  weatherCurrentCity.classList.add("weatherCurrentCity");
  weatherBlock.appendChild(weatherCurrentCity);

  const weatherCurrentParams = document.createElement("p");
  weatherCurrentParams.classList.add("weatherCurrentParams");
  weatherBlock.appendChild(weatherCurrentParams);

  el.appendChild(weatherBlock);

  const input = document.createElement("input");
  input.classList.add("input");
  el.appendChild(input);

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Проверить погоду";
  el.appendChild(button);

  const weatherMap = document.createElement("img");
  weatherMap.classList.add("weatherMap");
  weatherMap.src = "";
  weatherMap.width = "400";
  weatherMap.height = "400";
  weatherMap.style.display = "none";
  el.appendChild(weatherMap);

  const cityList = document.createElement("ul");
  cityList.classList.add("cityList");
  el.appendChild(cityList);

  cityList.addEventListener("click", async (event) => {
    const element = event.target;
    if (element) {
      const question = element.innerText;
      const myWeather = await getWeatherCity(question);
      if (myWeather) {
        showWetherResults(question, myWeather);
        showMyMapResults(getMapCityUrl(myWeather.coord));
      }
    }
  });

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
