import { connect } from "react-redux";
import Modal from "./Modal";
import { addCard } from "../../actions/";

const stateToProps = (state) => ({});

const dispatchToProps = {
  addCard,
};

export default connect(stateToProps, dispatchToProps)(Modal);
