let foodID = 0

export function addnote(food) {
  return {
    type: ADD_FOOD,
    id: foodId++,
    food
  }
}

export function deletenote(id) {
  return {
    type: DELETE_FOOD,
    payload: id
  }
}