import "./App.css";
import MyRoute from "./MyRoute";
import { legacy_createStore } from "redux"; //It helps compiler to know that the reducers is store.
import store from "./store";

import { Provider } from "react-redux";// to provide data from reducer to component
import cartReducer from "./Redux/Reducers/cartReducer";


function App() {
  // const store=legacy_createStore(cartReducer)
  return (
    <Provider store={store}>
      <MyRoute />
      
    </Provider>
  );
}

export default App
