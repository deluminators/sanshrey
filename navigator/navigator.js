import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DonationScreen from "../screens/DonationScreen";
import { Ionicons } from "@expo/vector-icons";
import { HelpStackNavigator } from "./stackNavigators";
import NeedsScreen from "../screens/NeedsVendors/needsScreen";
import VendorsScreen from "../screens/NeedsVendors/VendorsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawer from "../components/customDrawer";
import LocationPicker from "../screens/Maps/LocationPicker";
import MedicalNavigator from "./medicalNavigator";
import VolunteerNavigator from "./volunteerNavigator";

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "red" },
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const Home = () => (
  <Tab.Navigator initialRouteName="Home" shifting={true}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-home" size={26} color={color} />;
        },
        tabBarColor: "red",
      }}
    />
    <Tab.Screen
      name="Donation"
      component={DonationScreen}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-gift" size={26} color={color} />;
        },
        tabBarColor: "orange",
      }}
    />
    <Tab.Screen
      name="HelpStack"
      component={HelpStackNavigator}
      options={{
        title: "Help",
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-basket" size={26} color={color} />;
        },
        tabBarColor: "green",
      }}
    />
    <Tab.Screen
      name="Volunteer"
      component={VolunteerNavigator}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-people" size={26} color={color} />;
        },
        tabBarColor: "blue",
      }}
    />
  </Tab.Navigator>
);

const NeedsScreenStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "indigo" },
    }}
  >
    <Stack.Screen name="Needs" component={NeedsScreen} />
  </Stack.Navigator>
);

const VendorsScreenStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "indigo" },
    }}
  >
    <Stack.Screen name="Vendors" component={VendorsScreen} />
  </Stack.Navigator>
);

const NeedsVendors = () => (
  <Tab.Navigator barStyle={{ backgroundColor: "indigo" }}>
    <Tab.Screen
      name="Needs"
      component={NeedsScreenStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-shirt" size={26} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Vendors"
      component={VendorsScreenStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-share" size={26} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "blue" },
      }}
    >
      <Stack.Screen name="Location" component={LocationPicker} />
    </Stack.Navigator>
  );
};

const TabNavigator = (props) => {
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: "white" }}
      drawerContentOptions={{
        labelStyle: {
          color: "black",
        },
        activeTintColor: "orange",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Needs and Vendors" component={NeedsVendors} />
      <Drawer.Screen name="Medicals" component={MedicalNavigator} />
      <Drawer.Screen name="Your Location" component={MapStack} />
      <Drawer.Screen name="Volunteer" component={VolunteerNavigator} />
    </Drawer.Navigator>
  );
};

export default TabNavigator;
