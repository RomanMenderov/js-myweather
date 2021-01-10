/** working with API start */
const apiKey = "fa5292c9164722fbd4dd9fb5132d9ea9";

export async function getUserCity() {
  try {
    const apiUrl = "https://get.geojs.io/v1/ip/geo.json";
    const response = await fetch(apiUrl);
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
  const apiUrlBasic = "https://static-maps.yandex.ru/1.x/?l=map";
  const size = "400,400";
  const zoom = 10;
  const longitude = coordinates.lon;
  const latitude = coordinates.lat;
  const apiUrl = `${apiUrlBasic}&ll=${longitude},${latitude}
&size=${size}&z=${zoom}&pt=${longitude},${latitude}`;

  return apiUrl;
}

export async function getWeatherCity(cityName) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather
?q=${cityName}&units=metric&appid=${apiKey}`;
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
