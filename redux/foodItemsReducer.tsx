export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";

const initialState: any = [];

const foodItemsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ADD_FOOD:
      return [...state, action.payload];
    case DELETE_FOOD:
      return state.filter((food: any) => food.id !== action.payload.id);
  }
  return state;
};

export default foodItemsReducer;
