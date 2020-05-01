import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";

const TravelScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Travel Screen</Text>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("Apply")}
      >
        <View style={styles.item}>
          <Text style={styles.text}>Apply a ticket for your travel </Text>
          <Button
            title="apply"
            color="green"
            onPress={() => props.navigation.navigate("Apply")}
          />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("Verify")}
      >
        <View style={styles.item}>
          <Text style={styles.text}>Check status of your ticket</Text>
          <Button
            title="check"
            color="green"
            onPress={() => props.navigation.navigate("Verify")}
          />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("Check Status")}
      >
        <View style={styles.item}>
          <Text style={styles.text}>Check you other travel history..</Text>
          <Button
            title="verify"
            color="green"
            onPress={() => props.navigation.navigate("Check Status")}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default TravelScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  item: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    height: 100,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
