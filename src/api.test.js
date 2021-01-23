import {
  getUserCity,
  getMapCityUrl,
  getWeatherCity,
  WEATHER_CITY_API_URL,
  WEATHER_CITY_API_KEY,
} from "./api";

describe("test 1st task", () => {
  const textValue = Math.random().toString();
  const returnedObject = { ok: true, city: textValue };

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(returnedObject));
  });

  test("it should create map url", () => {
    const myCoord = { lon: Math.random(), lat: Math.random() };

    expect(getMapCityUrl(myCoord)).toEqual(
      expect.stringContaining(`${myCoord.lon},${myCoord.lat}`)
    );
  });

  test("it should return cityname", async () => {
    await getUserCity().then((res) => {
      expect(res).toEqual(textValue);
    });
    expect(fetch).toBeCalledWith("https://get.geojs.io/v1/ip/geo.json");
  });

  test("it should return json", async () => {
    await getWeatherCity(textValue).then((res) => {
      expect(JSON.stringify(res)).toEqual(JSON.stringify(returnedObject));
    });
    expect(fetch).toBeCalledWith(`${WEATHER_CITY_API_URL}?q=${textValue}
&units=metric&appid=${WEATHER_CITY_API_KEY}`);
  });
});
