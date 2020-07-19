import { createStore } from 'redux'
import foodItemsReducer from './foodItemsReducer'

const store = createStore(foodItemsReducer)

export default store