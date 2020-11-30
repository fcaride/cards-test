import { connect } from "react-redux";
import CardList from "./CardList";

const stateToProps = (state) => ({ cardList: state.cards.cardList });

const dispatchToProps = {};

export default connect(stateToProps, dispatchToProps)(CardList);
