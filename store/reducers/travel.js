import { GENERATE_TRAVEL } from "../actions/travel";

const initialState = {
  travels: [],
};

export const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_TRAVEL:
      return Object.assign({}, state, {
        travels: [action.id, ...state.travels],
      });
    default:
      return state;
  }
};
