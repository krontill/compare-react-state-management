import { connect } from 'react-redux';
import {decrement, increment} from "./actions";

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export const container = componentName =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
