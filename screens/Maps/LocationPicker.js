import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import HeaderButton from "../../components/HeaderButton";

const LocationPicker = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButton
            name="ios-menu"
            color="white"
            size={25}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        );
      },
    });
  });
  const fetchLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        return Alert.alert("permission denied.", "enable permissions");
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    } catch (er) {
      Alert.alert("error fetching location", "choose location manually");
    }
  };
  let text;
  const [location, setLocation] = useState(null);
  const [fetching, setFetching] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      {/* <View style={styles.mapStyle}>
        {location ? (
          <Text>{JSON.stringify(location)}</Text>
        ) : (
          <Text>{text}</Text>
        )}
      </View> */}
      {location ? (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00521,
          }}
          style={styles.mapStyle}
        />
      ) : (
        <MapView style={styles.mapStyle} />
      )}
      {/* <MapView style={styles.mapStyle} /> */}
      <Button title="get location" onPress={fetchLocation} />
    </SafeAreaView>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100,
  },
});
