import { ADD_CARD } from "../constants/ActionTypes";

const initialState = {
  cardList: [
    {
      name: "Pepe",
      image: "https://miro.medium.com/max/1400/1*47fUazhRoJgChsgy6YxnzQ.png",
      description:
        "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” ",
    },
  ],
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
    default:
      return state;
  }
}
