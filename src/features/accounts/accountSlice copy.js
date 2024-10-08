const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
  };
  
  export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
      case "account/deposit":
        return {
          ...state,
          balance: state.balance + action.payload,
          isLoading: false,
        };
      case "account/withdraw":
        return {
          ...state,
          balance: state.balance - action.payload,
        };
      case "account/requestLoan":
        if (state.loan > 0) {
          return state;
        }
        return {
          ...state,
          loan: state.loan + action.payload,
          balance: state.balance + action.payload,
          loanPurpose: action.loanPurpose,
        };
      case "account/payLoan":
        return {
          ...state,
          loan: 0,
          balance: state.balance - state.loan,
          loanPurpose: "",
        };
      case "account/convertingCurrency":
        return {
          ...state,
          isLoading: true,
        };
      default:
        return state;
    }
  }
  

  export function deposit(amount, currency) {

    if (currency === "USD") {
      return { type: "account/deposit", payload: amount };
    }

    return async function (dispatch, getState) {
      dispatch({ type: "account/convertingCurrency" });
        // API call
        const host = 'api.frankfurter.app';

        const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
        const data = await res.json();
        const converted = data.rates.USD;

        console.log(converted);
                //return action
         return dispatch({ type: "account/deposit", payload: converted });
    }
        
  }
  
  export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
  }
  
  export function requestLoan(amount, loanPurpose) {
    return { type: "account/requestLoan", payload: amount, loanPurpose };
  }
  
  export function payLoan() {
    return { type: "account/payLoan" };
  }