import { connect } from "react-redux";
import Modal from "./Modal";
import { addCard, editCard } from "../../actions/";

const stateToProps = (state) => ({});

const dispatchToProps = {
  addCard,
  editCard,
};

export default connect(stateToProps, dispatchToProps)(Modal);
