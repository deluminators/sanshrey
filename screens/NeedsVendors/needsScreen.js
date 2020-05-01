import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderButton from "../../components/HeaderButton";

const NeedsScreen = (props) => {
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
  return (
    <View style={styles.screen}>
      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Ionicons name="ios-add" size={50} color="white" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default NeedsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    borderRadius: 40,
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
