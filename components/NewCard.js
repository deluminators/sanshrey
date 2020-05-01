import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";

const NewCard = (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <Image
          source={{
            uri: props.imageUrl,
          }}
          style={{ width: "100%", height: 200 }}
        />
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            paddingVertical: 10,
            textAlign: "center",
            color: "white",
          }}
        >
          {props.desc}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title={props.title} color="red" />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",

    paddingBottom: 20,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
  },
});
