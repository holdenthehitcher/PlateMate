import { createStore, applyMiddleware } from "redux";
import {Profile} from './ProfileRedux'
import {FoodsActionsReducer} from "./FoodItemsRedux";
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
      FoodsActionsReducer,
      Profile
    })
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
