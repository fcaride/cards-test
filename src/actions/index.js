import * as types from "../constants/ActionTypes";

export const addCard = (cardInfo) => ({ type: types.ADD_CARD, cardInfo });
export const sortCards = () => (dispatch, getState) => {
  const { cardList } = getState().cards;

  const sortedList = Object.assign([], cardList);
  sortedList.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  dispatch({ type: types.SORT_CARDS, cardList: sortedList });
};
