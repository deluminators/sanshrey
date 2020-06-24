import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedicalScreen from "../screens/Medicals/MedicalScreen";
import MedicinesScreen from "../screens/Medicals/medicines";
import DiagnosticsScreen from "../screens/Medicals/diagnostics";
import DoctorsScreen from "../screens/Medicals/doctors";
import CheckTicketScreen from "../screens/Medicals/checkTicket";

const Stack = createStackNavigator();

const MedicalNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Volunteer"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "green" },
      }}
    >
      <Stack.Screen name="Medicals" component={MedicalScreen} />
      <Stack.Screen name="Medicines" component={MedicinesScreen} />
      <Stack.Screen name="Diagnostics" component={DiagnosticsScreen} />
      <Stack.Screen name="Doctors" component={DoctorsScreen} />
      <Stack.Screen name="Tickets" component={CheckTicketScreen} />
    </Stack.Navigator>
  );
};

export default MedicalNavigator;
