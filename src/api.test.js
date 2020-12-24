/* eslint-disable no-proto */
import { getMapCityUrl } from "./api";

describe("test 1st task", () => {
  beforeEach(() => {
    //  jest.spyOn(console, "log");
    // fetch.mockClear();
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
});
