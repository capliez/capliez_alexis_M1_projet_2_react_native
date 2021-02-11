import { GET_ALL_RECIPES, GET_RECIPE, ERROR } from "../actionTypes";
const defaultState = {
  recipes: [],
  recipe: null,
  error: null,
};

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return { ...state, recipes: action.payload, error: null };
    case GET_RECIPE:
      return { ...state, recipe: action.payload, error: null };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
