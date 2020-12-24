/** working with API start */
const apiKey = "fa5292c9164722fbd4dd9fb5132d9ea9";

export async function getUserCity() {
  const apiUrl = "https://get.geojs.io/v1/ip/geo.json";
  const response = await fetch(apiUrl);
  if (response.ok) {
    const result = await response.json();
    return result.city;
  }
  return false;
}

export function getMapCityUrl(coordinates) {
  const apiUrlBasic = "https://static-maps.yandex.ru/1.x/?l=map";
  const size = "400,400";
  const zoom = 10;
  //  const key = "ff1506d9-6fce-4710-8c9d-d5a2c11ce32b";
  const longitude = coordinates.lon;
  const latitude = coordinates.lat;
  const apiUrl = `${apiUrlBasic}&ll=${longitude},${latitude}
&size=${size}&z=${zoom}&pt=${longitude},${latitude}`;
  //  apiUrlBasic + `&ll=${longitude},${latitude}` + `&size=${size}&z=${zoom}`; //  + &key=${key};

  return apiUrl;
}

export async function getWeatherCity(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather
?q=${cityName}&units=metric&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  return false;
}

/** working with API end */
