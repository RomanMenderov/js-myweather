import { getUserCity, getMapCityUrl, getWeatherCity } from "./api";

describe("test 1st task", () => {
  const textValue = Math.random().toString();
  const returnedObject = { city: textValue };

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

  test("it should return cityname", () => {
    getUserCity().then((res) => {
      expect(res).toEqual(textValue);
    });
  });

  test("it should return json", () => {
    getWeatherCity(textValue).then((res) => {
      expect(JSON.stringify(res)).toEqual(JSON.stringify(returnedObject));
    });
  });
});
