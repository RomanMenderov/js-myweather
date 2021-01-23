import {
  addWeatherForm,
  showMyMapResults,
  showUserHistory,
  showWetherResults,
} from "./core";

describe("test 1st task", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
  });

  test("it should create basic markup", () => {
    addWeatherForm(el);
    expect(el.querySelector("input")).not.toBe(null);
  });

  test("it should check if we show users history", () => {
    addWeatherForm(el);
    showUserHistory(["123", "321"], el.querySelector(".cityList"));

    expect(el.querySelectorAll(".cityList > li")[0].innerText).toBe("123");
  });

  test("it should check if 1st li elem has click action", () => {
    addWeatherForm(el);
    showUserHistory(["123", "321"], el.querySelector(".cityList"));
    fetch.enableMocks();
    el.querySelector(".cityList > li").click();

    expect(fetch).toBeCalledTimes(1);
  });

  test("it should check if wether is on site", () => {
    addWeatherForm(el);
    const temp = Math.random();
    showWetherResults(
      "My city",
      {
        coord: { lon: 21.78, lat: 38.3 },
        weather: [
          { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
        ],
        main: { temp },
      },
      el.querySelector(".weatherCurrentParams"),
      el.querySelector(".weatherCurrentCity")
    );

    expect(el.querySelector(".weatherCurrentParams").innerText).toBe(
      `Температура: ${temp}`
    );
    expect(el.querySelector(".weatherCurrentCity").innerHTML).toBeTruthy();

    showWetherResults(
      "My city",
      "не найдено",
      el.querySelector(".weatherCurrentParams"),
      el.querySelector(".weatherCurrentCity")
    );
    expect(el.querySelector(".weatherCurrentParams").innerText).toBe(
      `не найдено`
    );
    expect(el.querySelector(".weatherCurrentCity").innerHTML).toBe(`My city`);
  });

  test("it should check if map is on site", () => {
    addWeatherForm(el);
    const mapElement = el.querySelector(".weatherMap");
    showMyMapResults("http://", mapElement);

    expect(mapElement.src).toBe(`http://`);
    expect(mapElement.style.display).toBe("block");
  });
});
