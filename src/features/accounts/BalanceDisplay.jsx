import PropTypes from "prop-types";
import formatCurrency from "./FormatCurrency";

function BalanceDisplay({ balance }) {

 
  return <div className="balance">{formatCurrency(balance)}</div>;
}

BalanceDisplay.propTypes = {
  balance: PropTypes.number,
};

export default BalanceDisplay;