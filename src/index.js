import "regenerator-runtime/runtime";

import { getUserHistory, userHistory } from "./history";

import { addWeatherForm, showUserHistory, showMyWeather } from "./core";

addWeatherForm(document.querySelector("body"));
getUserHistory().forEach((arrElement) => {
  userHistory.push(arrElement);
});
showUserHistory(userHistory);
showMyWeather();
