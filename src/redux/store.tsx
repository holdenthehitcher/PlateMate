import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import FoodsList from "./FoodItemsRedux";
import Profile from "./ProfileRedux";
import storage from 'redux-persist/es/storage';
import { persistStore, persistCombineReducers } from "redux-persist";

const config = {
  key: "root",
  storage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      Profile,
      FoodsList,
    }),
    applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
