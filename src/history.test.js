/* eslint-disable no-proto */
import {
  getUserHistory,
  setUserHistory,
  isUsersQuestionNotUnique,
  checkUserHistoryStatus,
  saveCityToHistory,
} from "./history";

describe("test 1st task", () => {
  const userHistoryLocalName = "userCityHistory";
  let userHistory;
  const setItemProto = window.localStorage.__proto__.setItem;
  const getItemProto = window.localStorage.__proto__.getItem;

  beforeAll(() => {
    jest.spyOn(window.localStorage.__proto__, "getItem");
    window.localStorage.__proto__.getItem = jest.fn();

    jest.spyOn(window.localStorage.__proto__, "setItem");
    window.localStorage.__proto__.setItem = jest.fn();
  });

  beforeEach(() => {
    userHistory = [];
  });

  afterAll(() => {
    window.localStorage.__proto__.getItem = getItemProto;
    window.localStorage.__proto__.setItem = setItemProto;
  });

  test("it should check user history", () => {
    getUserHistory();
    expect(localStorage.getItem).toHaveBeenCalledWith(userHistoryLocalName);
  });

  test("it should save new data in localstoradge", () => {
    setUserHistory(["Minsk", "Moskow"]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      userHistoryLocalName,
      '["Minsk","Moskow"]'
    );
  });

  test("it should check if city is unique ", () => {
    userHistory.push("Moscow");

    expect(isUsersQuestionNotUnique("New York", userHistory)).toEqual(false);
    expect(isUsersQuestionNotUnique("Moscow", userHistory)).toBe(true);
  });

  test("it should check if history length allowed", () => {
    expect(checkUserHistoryStatus(new Array(10))).toBe(true);
    expect(checkUserHistoryStatus(new Array(12))).toBe(false);
  });

  test("it should check if history data correct work", () => {
    userHistory.push("Moscow");
    userHistory.push("Piter");
    saveCityToHistory("Vilnus", userHistory);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      userHistoryLocalName,
      '["Vilnus","Moscow","Piter"]'
    );
  });
});
