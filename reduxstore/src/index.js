import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import data from "./Components/Data/data.js";
import { Provider } from "react-redux";
import { act } from "@testing-library/react";

const defaultState = {
  goods: {},
};

const reducerFilter = (state = defaultState.goods, action) => {
  switch (action.type) {
    case "Smartphones":
      return Array.isArray(state.Smartphones)
        ? { ...state, Smartphones: "" }
        : { Smartphones: data.Smartphones };

    case "TVs":
      return Array.isArray(state.TVs)
        ? { ...state, TVs: "" }
        : { ...state, TVs: data.TVs };
    case "Laptops":
      return Array.isArray(state.Laptops)
        ? { ...state, Laptops: "" }
        : { ...state, Laptops: data.Laptops };
    case "Fridges":
      return Array.isArray(state.Fridges)
        ? { ...state, Fridges: "" }
        : { ...state, Fridges: data.Fridges };
    case "Wash Machine":
      return Array.isArray(state["Wash Machine"])
        ? { ...state, "Wash Machine": "" }
        : { ...state, "Wash Machine": data["Wash Machine"] };
    default:
      return state;
  }
};

const defaultCartState = {
  goods: [],
  price: 0,
};

const reducerCart = (state = defaultCartState, action) => {
  switch (action.type) {
    case "ADD_GOOD":
      return {
        ...state,
        goods: [...state.goods, action.payload],
        price: state.price + action.payload.price,
      };

      case "REMOVE_GOOD":
      return {
        ...state,
        goods: [...state.goods.filter(el=> el.id !== action.payload.id)],
        price: state.price > 0 ? state.price - action.payload.price : state.price,
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  filter: reducerFilter,
  cart: reducerCart,
});

const store = configureStore({
  reducer: reducers,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
