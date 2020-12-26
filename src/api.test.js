/* eslint-disable no-proto */
import { getUserCity, getMapCityUrl, getWeatherCity } from "./api";

describe("test 1st task", () => {
  beforeEach(() => {
    //  jest.spyOn(console, "log");
    fetch.resetMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should create map url", () => {
    const myCoord = { lon: Math.random(), lat: Math.random() };
    expect(getMapCityUrl(myCoord)).toEqual(
      expect.stringContaining(`${myCoord.lon},${myCoord.lat}`)
    );
  });

  test("it should return cityname", () => {
    fetch.mockResponseOnce(JSON.stringify({ city: "Москва" }));

    getUserCity().then((res) => {
      expect(res).toEqual("Москва");
    });
  });

  test("it should return json", () => {
    const returnedObject = { city: "Москва" };
    fetch.mockResponseOnce(JSON.stringify(returnedObject));

    getWeatherCity("Москва").then((res) => {
      expect(JSON.stringify(res)).toEqual(JSON.stringify(returnedObject));
    });
  });
});
