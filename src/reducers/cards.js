import { ADD_CARD, SORT_CARDS } from "../constants/ActionTypes";

const initialState = {
  cardList: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { name, image, description } = action.cardInfo;
      const newCard = {
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

    default:
      return state;
  }
}
