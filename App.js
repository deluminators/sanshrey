import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigator/navigator";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { travelReducer } from "./store/reducers/travel";
import LoadingScreen from "./screens/loadingScreen";

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
