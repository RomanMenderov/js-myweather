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

  beforeAll(() => {
    jest.spyOn(Storage.prototype, "setItem");
    jest.spyOn(Storage.prototype, "getItem");
  });

  beforeEach(() => {
    userHistory = [];
  });

  afterAll(() => {
    localStorage.setItem.mockRestore();
    localStorage.getItem.mockRestore();
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
