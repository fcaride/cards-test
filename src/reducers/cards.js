import {
  ADD_CARD,
  SORT_CARDS,
  REMOVE_CARD,
  EDIT_CARD,
} from "../constants/ActionTypes";

const initialState = {
  cardList: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { name, image, description } = action.cardInfo;
      const newCard = {
        id:
          state.cardList.reduce((maxId, card) => Math.max(card.id, maxId), -1) +
          1,
        name,
        image,
        description,
      };
      return {
        ...state,
        cardList: [...state.cardList, newCard],
      };
    }
    case SORT_CARDS:
      return {
        ...state,
        cardList: action.cardList,
      };
    case REMOVE_CARD:
      return {
        ...state,
        cardList: state.cardList.filter((card) => card.id !== action.id),
      };
    case EDIT_CARD:
      return {
        ...state,
        cardList: state.cardList.map((card) =>
          card.id === action.card.id ? action.card : card
        ),
      };
    default:
      return state;
  }
}
