import "regenerator-runtime/runtime";

import { getUserHistory, userHistory } from "./history";

import { addWeatherForm, showUserHistory, showMyWeather } from "./core";

addWeatherForm(document.getElementsByTagName("body")[0]);
getUserHistory().forEach((arrElement) => {
  userHistory.push(arrElement);
});
showUserHistory(userHistory);
showMyWeather();
