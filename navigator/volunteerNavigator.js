import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JoinScreen from "../screens/Volunteer/JoinScreen";
import VolunteerList from "../screens/Volunteer/VolunteerList";
import FindVolunteers from "../screens/Volunteer/FindVolunteers";
import VolunteerRegistration from "../screens/Volunteer/VolunteerRegistration";

const Stack = createStackNavigator();

const VolunteerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Volunteer"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "blue" },
      }}
    >
      <Stack.Screen name="Volunteer" component={JoinScreen} />
      <Stack.Screen name="Registration" component={VolunteerRegistration} />
      <Stack.Screen name="List Volunteer" component={VolunteerList} />
      <Stack.Screen name="Find Volunteer" component={FindVolunteers} />
    </Stack.Navigator>
  );
};

export default VolunteerNavigator;
