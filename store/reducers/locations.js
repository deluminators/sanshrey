import { ADD_LOCATION } from "../actions/locations";

const initialState = {
  locations: [],
};

export const locationReducer = (state = initialState, action) => {
  console.log("hello");
  switch (action.type) {
    case ADD_LOCATION:
      //   console.log("action dispatched");
      if (
        state.locations.length !== 0 &&
        action.location === state.locations[state.locations.length - 1]
      )
        return state;
      return Object.assign({}, state, {
        locations: [action.location, ...state.locations],
      });
    default:
      return state;
  }
};
