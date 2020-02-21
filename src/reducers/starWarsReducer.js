/* we need our action types here*/

import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  error: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  // console.log("reducer", action);
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: " ",
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ""
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
