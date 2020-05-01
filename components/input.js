import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textAlignVertical: "center",
          fontSize: 15,
        }}
      >
        {props.children.toUpperCase()}
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "white",
          borderWidth: 2,
          width: "65%",
          backgroundColor: "white",
          padding: 5,
          fontSize: 18,
        }}
        onChangeText={(text) => props.onChangeText(text)}
        value={props.value}
        textContentType={props.type}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
export default Input;
