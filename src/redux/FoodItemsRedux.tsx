export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";
export const FOOD_FAILED = "COMMENTS_FAILED";

export const fetchFood = () => (dispatch: any) => {
  return fetch("FoodsList")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((food) => dispatch(addFood(food)))
    .catch((error) => dispatch(foodFailed(error.message)));
};

export const foodFailed = (errMess: any) => ({
  type: FOOD_FAILED,
  payload: errMess,
});

export const addFood = (food: any) => ({
  type: ADD_FOOD,
  payload: food,
});

export const postFood = (id: any, rating: any, author: any, text: any) => (
  dispatch: (arg0: { type: any; payload: any }) => any
) => {
  const newFood = {
    id,
    rating: rating,
    author: author,
    text: text,
  };

  return fetch("FoodsList", {
    method: "POST",
    body: JSON.stringify(newFood),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addFood(response)))
    .catch((error) => {
      console.log("Add a Food", error.message);
      alert("Your Food could not be Added\nError: " + error.message);
    });
};

const FoodsList = (state = { errMess: null, foods: [] }, action: { type: any; payload: any }, id: any) => {
  switch (action.type) {
    case FOOD_FAILED:
      return { ...state, errMess: action.payload };
    case ADD_FOOD:
      const food = { ...action.payload, id: state.foods.length + 1 };
      return { ...state, foods: state.foods.concat(food) };
    case DELETE_FOOD:
      const deletedFood = { ...action.payload, id: id };
      return { ...state, foods: state.foods.filter((id: any) => id === !deletedFood.id) };
    default:
      return state;
  }
};

export default FoodsList;
