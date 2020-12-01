import { connect } from "react-redux";
import Card from "./Card";
import { removeCard } from "../../actions";

const stateToProps = () => ({});

const dispatchToProps = { removeCard };

export default connect(stateToProps, dispatchToProps)(Card);
