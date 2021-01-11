import { getUserHistory, userHistory } from "./history";

import { addWeatherForm, showUserHistory, showMyWeather } from "./core";

addWeatherForm(document.querySelector("body"));
(async function showHistory() {
  const history = await getUserHistory();
  history.forEach((arrElement) => {
    userHistory.push(arrElement);
  });

  showUserHistory(userHistory);
})();
showMyWeather();
