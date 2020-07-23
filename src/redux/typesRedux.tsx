export interface FoodItem {
  id: number;
  name: string;
  calories: number;
  image: string;
  addedToList: boolean;
}

export interface FoodsListState {
  allFoods: FoodItem[];
}

export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";
export const TOGGLE_FOOD = "TOGGLE_FOOD";

interface AddFood {
  type: typeof ADD_FOOD;
  payload: FoodItem;
}

interface DeleteFood {
  type: typeof DELETE_FOOD;
  payload: FoodItem["id"];
}

interface ToggleFood {
    type: typeof TOGGLE_FOOD;
    payload: FoodItem;
}

export type FoodActionTypes = AddFood | DeleteFood | ToggleFood;
