const userHistoryLocalName = "userCityHistory";
const historyLength = 10;
export const userHistory = [];

const asyncLocalStorage = {
  async setItem(key, value) {
    return localStorage.setItem(key, value);
  },
  async getItem(key) {
    return localStorage.getItem(key);
  },
};

export async function getUserHistory() {
  const result = await asyncLocalStorage.getItem(userHistoryLocalName);
  if (result) {
    return JSON.parse(result);
  }
  return [];
}

export async function setUserHistory(array) {
  await asyncLocalStorage.setItem(userHistoryLocalName, JSON.stringify(array));
}

export function isUsersQuestionNotUnique(question, array = userHistory) {
  return array.some((el) => question.toLowerCase() === el.toLowerCase());
}

export function checkUserHistoryStatus(array) {
  if (array.length <= historyLength) {
    return true;
  }
  return false;
}

export function saveCityToHistory(question, array = userHistory) {
  if (!isUsersQuestionNotUnique(question, array)) {
    array.unshift(question);
    if (!checkUserHistoryStatus(array)) {
      array.pop();
    }
  }
  return setUserHistory(array);
}
