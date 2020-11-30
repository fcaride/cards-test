import { connect } from "react-redux";
import SortButton from "./SortButton";
import { sortCards } from "../../actions/";

const stateToProps = (state) => ({});

const dispatchToProps = {
  sortCards,
};

export default connect(stateToProps, dispatchToProps)(SortButton);
