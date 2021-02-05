import { v4 as uuidv4 } from "uuid";

export const petReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PET":
      return [
        ...state,

        {
          name: action.pet.name,
          age: action.pet.age,
          date: action.pet.date,
          id: uuidv4(),
        },
      ];
    case "DELETE_PET":
      return state.filter((pet) => pet.id !== action.id);

    case "CLEAR_PETS":
      return [];
    default:
      return state;
  }
};
