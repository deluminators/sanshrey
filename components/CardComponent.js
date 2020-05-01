import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const CardComponent = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => props.navigation.navigate("Travel")}
    >
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={{ fontSize: 17, marginBottom: 15 }}>{props.desc}</Text>
          <View
            style={{
              width: "100%",
              bottom: 5,
              right: 2,
            }}
          >
            <Button
              color="green"
              title={props.buttonDesc}
              onPress={() => navigation.navigate("Travel")}
            />
          </View>
        </View>
        <Image
          source={{ uri: props.imageUrl }}
          style={{ width: "40%", height: "100%" }}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    width: "99%",
    backgroundColor: "white",

    borderRadius: 50,
    overflow: "hidden",
    flexDirection: "row",
  },
  textContainer: {
    width: "60%",
    height: "100%",
    paddingLeft: 30,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
