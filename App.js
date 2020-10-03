import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigator/navigator";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { travelReducer } from "./store/reducers/travel";
import { locationReducer } from "./store/reducers/locations";
import LoadingScreen from "./screens/loadingScreen";
import { Alert } from "react-native";
import * as Location from "expo-location";

const rootReducer = combineReducers({
  travel: travelReducer,
  location: locationReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const fetchLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        return Alert.alert("permission denied.", "enable permissions");
      }
      const stat = await Location.hasServicesEnabledAsync();
      if (!stat) {
        Alert.alert("location", "enable location");
      }
    } catch (er) {
      console.log(er);
      Alert.alert("error fetching location", "enable location");
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

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
