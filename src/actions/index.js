import * as types from "../constants/ActionTypes";

export const addCard = (cardInfo) => ({ type: types.ADD_CARD, cardInfo });
