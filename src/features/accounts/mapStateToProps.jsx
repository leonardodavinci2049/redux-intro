import { connect } from "react-redux";
import BalanceDisplay from "./BalanceDisplay";

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

const ConnectedBalanceDisplay = connect(mapStateToProps)(BalanceDisplay);
export default ConnectedBalanceDisplay;
