import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categories-reducer";
import cartReducer from "./cart/cart-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
