import { getStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = getStore();


function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
