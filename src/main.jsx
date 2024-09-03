import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";

import store from "./redux/store.js";
import { Provider } from "react-redux";

store.dispatch({ type: "account/deposit", payload: 100 });
//console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
