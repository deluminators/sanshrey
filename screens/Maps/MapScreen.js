import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

const MapScreen = (props) => {
  return (
    <View style={styles.screen}>
      <MapView style={styles.mapStyle} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 700,
  },
});
