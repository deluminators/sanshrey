import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigator/navigator";
import { Provider, useDispatch } from "react-redux";
import { combineReducers, createStore } from "redux";
import { travelReducer } from "./store/reducers/travel";
import { locationReducer } from "./store/reducers/locations";
import { addLocation } from "./store/actions/locations";
import LoadingScreen from "./screens/loadingScreen";
import MapView from "react-native-maps";
import MapScreen from "./screens/Maps/MapScreen";
import LocationPicker from "./screens/Maps/LocationPicker";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

const rootReducer = combineReducers({
  travel: travelReducer,
  location: locationReducer,
});

const store = createStore(rootReducer);

export default function App() {
  // const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return <LoadingScreen />;
  }

  // return (
  //   <View style={styles.container}>
  //     {/* <MapView style={{ width: "100%", height: "100%" }} /> */}
  //     {/* <MapScreen /> */}
  //     <LocationPicker />
  //   </View>
  // );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// TaskManager.defineTask("background-task-location", ({ data, error }) => {
//   if (error) {
//     console.log(error);
//     // Error occurred - check `error.message` for more details.
//     return;
//   }
//   if (data) {
//     const { locations } = data;
//     console.log(data);
//     // do something with the locations captured in the background
//   }
// });
