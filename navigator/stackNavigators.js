import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from "../screens/HelpScreen";
import TravelScreen from "../screens/TravelScreen";
import ApplyScreen from "../screens/ApplyScreen";
import CheckScreen from "../screens/CheckScreen";
import VerifyScreen from "../screens/VerifyScreen";

const Stack = createStackNavigator();

export const HelpStackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Help"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "green" },
      }}
    >
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Travel" component={TravelScreen} />
      <Stack.Screen name="Apply" component={ApplyScreen} />
      <Stack.Screen name="Check Status" component={CheckScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
    </Stack.Navigator>
  );
};
