import Axios from "axios";
import { GET_ALL_RECIPES, GET_RECIPE, ERROR } from "./actionTypes";

const API_KEY = "2e79502f22a5420f9881ded9ec37d7e9";
const BASE_URL =
  "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + API_KEY;
export function getAllRecipes() {
  return function (dispatch) {
    return Axios.get(BASE_URL)
      .then((response) => {
        dispatch({
          type: GET_ALL_RECIPES,
          payload: response.data.recipes,
        });
      })
      .catch(() =>
        dispatch({
          type: ERROR,
          payload: "Une probléme avec l'API",
        })
      );
  };
}

export const getRecipe = (recipe) => ({
  type: GET_RECIPE,
  payload: recipe,
});

export const getError = (error) => ({
  type: ERROR,
  payload: error,
});
