const userHistoryLocalName = "userCityHistory";
const historyLength = 10;
export const userHistory = [];

/** working with localStorage start */
export function getUserHistory() {
  const result = localStorage.getItem(userHistoryLocalName);
  if (result) {
    return JSON.parse(result);
  }
  return [];
}

export async function setUserHistory(array) {
  return localStorage.setItem(userHistoryLocalName, JSON.stringify(array));
}

/** working with localStorage end */

/** working with userHistoryArr start */
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

/** working with userHistoryArr end */
