/** working with API start */
const USER_CITY_API_URL = "https://get.geojs.io/v1/ip/geo.json";
const MAP_CITY_URL = "https://static-maps.yandex.ru/1.x/?l=map";
const WEATHER_CITY_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_CITY_API_KEY = "fa5292c9164722fbd4dd9fb5132d9ea9";

export async function getUserCity() {
  try {
    const response = await fetch(USER_CITY_API_URL);
    if (response.ok) {
      const result = await response.json();
      return result.city;
    }
    return false;
  } catch (err) {
    return null;
  }
}

export function getMapCityUrl(coordinates) {
  const size = "400,400";
  const zoom = 10;
  const longitude = coordinates.lon;
  const latitude = coordinates.lat;
  const apiUrl = `${MAP_CITY_URL}&ll=${longitude},${latitude}
&size=${size}&z=${zoom}&pt=${longitude},${latitude}`;

  return apiUrl;
}

export async function getWeatherCity(cityName) {
  try {
    const apiUrl = `${WEATHER_CITY_API_URL}?q=${cityName}&units=metric
&appid=${WEATHER_CITY_API_KEY}`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    return false;
  } catch (err) {
    return null;
  }
}

/** working with API end */
