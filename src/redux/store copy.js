import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
    rootReducers, 
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store;

