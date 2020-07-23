import { FoodItem, FoodsListState, FoodActionTypes, ADD_FOOD, DELETE_FOOD, TOGGLE_FOOD } from "./typesRedux";
/// foods Action Creators

export const addFood = (newFoodItem: FoodItem): FoodActionTypes => ({
  type: ADD_FOOD,
  payload: newFoodItem,
});

export const deleteFood = (id: number) => ({
  type: DELETE_FOOD,
  payload: id,
});

export const toggleFood = (addedToList: boolean) => ({
  type: TOGGLE_FOOD,
  payload: addedToList,
});

/// foods reducer

const initialState: FoodsListState = {
  allFoods: [],
};

export const FoodsActionsReducer = (state = initialState, action: FoodActionTypes): FoodsListState => {
  switch (action.type) {
    case ADD_FOOD:
      const newFood = { ...action.payload, id: state.allFoods.length + 1 };
      return { ...state, allFoods: state.allFoods.concat(newFood) };
    case DELETE_FOOD:
      return {
        ...state,
        allFoods: state.allFoods.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_FOOD:
      {
        const { id } = action.payload;
        const currentFood = state.allFoods[id];
        return {
          ...state,
          [id]: { ...currentFood, addedToList: !currentFood.addedToList },
        };
      }
      return state;
  }
};
