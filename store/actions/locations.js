export const ADD_LOCATION = "ADD_LOCATION";

export const addLocation = (location, state) => {
  //   console.log("i am called");
  return { type: ADD_LOCATION, location, state };
};
