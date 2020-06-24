import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Button,
} from "react-native";
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
      <View style={styles.container}>
        <Text
          style={{ width: "60%", fontSize: 18, fontWeight: "bold" }}
          numberOfLines={4}
        >
          Chana Dal, 1kg, 90rs ,Manali Store
        </Text>
        <View style={{ width: "40%" }}>
          <Button title="show more details" color="green" />
        </View>
      </View>
      <View style={styles.container}>
        <Text
          style={{ width: "60%", fontSize: 18, fontWeight: "bold" }}
          numberOfLines={4}
        >
          Apple, 3kg, 300rs ,Manali Store
        </Text>
        <View style={{ width: "40%" }}>
          <Button title="show more details" color="green" />
        </View>
      </View>
      <View style={styles.container}>
        <Text
          style={{ width: "60%", fontSize: 18, fontWeight: "bold" }}
          numberOfLines={4}
        >
          AquaLite water Supply, 1 jar, 180rs ,Manali Store
        </Text>
        <View style={{ width: "40%" }}>
          <Button title="show more details" color="green" />
        </View>
      </View>
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
  container: {
    width: "90%",
    backgroundColor: "white",

    flexDirection: "row",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
});
