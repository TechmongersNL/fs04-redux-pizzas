// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzas/slice";
import restaurantsReducer from "./restaurants/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    restaurants: restaurantsReducer,
    user: userReducer,
  },
});

export default store;
