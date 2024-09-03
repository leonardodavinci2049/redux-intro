import { useSelector } from "react-redux";
import AccountOperations from "../features/accounts/AccountOperations";

import CreateCustomer from "../features/customers/CreateCustomer";
import Customer from "../features/customers/Customer";
import MapStateToProps from "../features/accounts/mapStateToProps";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <MapStateToProps />
        </>
      )}
    </div>
  );
}

export default App;
