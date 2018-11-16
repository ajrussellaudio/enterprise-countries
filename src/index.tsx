import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.connect";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configure";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./index.css";

const initialState = {
  countries: {
    list: [],
    isLoading: false
  },
  filter: {}
};

const store = configureStore(initialState);

const appWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithStore, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
