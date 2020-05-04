import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import Button from '../components/CustomButton';
import { Ionicons } from "@expo/vector-icons";

const MedicalCard = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ width: "60%", fontSize: 18, fontWeight: "bold" }}
        numberOfLines={4}
      >
        {props.desc}
      </Text>
      <View style={{ width: "40%" }}>
        <Button title={props.title} color="green" />
      </View>
      <Ionicons
        name="ios-alert"
        size={30}
        color="green"
        style={{ paddingLeft: 5 }}
      />
    </View>
  );
};

export default MedicalCard;

const styles = StyleSheet.create({
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
