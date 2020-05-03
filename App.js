import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigator/navigator";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { travelReducer } from "./store/reducers/travel";
import LoadingScreen from "./screens/loadingScreen";
import MapView from "react-native-maps";
import MapScreen from "./screens/Maps/MapScreen";
import LocationPicker from "./screens/Maps/LocationPicker";

const rootReducer = combineReducers({
  travel: travelReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      {/* <MapView style={{ width: "100%", height: "100%" }} /> */}
      {/* <MapScreen /> */}
      <LocationPicker />
    </View>
  );

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
