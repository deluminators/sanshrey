import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const VolunteerCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <View style={styles.desc}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{props.name}</Text>
          <Text style={styles.text}>{props.prof}</Text>
          <Text style={styles.text}>Charges Per Visit: {props.price}</Text>
          <Text style={styles.text}>{props.time}min away</Text>
        </View>
        <Image
          style={{ width: "50%", height: 100, borderRadius: 20 }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQJR6BqqLi6y004j182y-DQqexGNssQn5AHlZ7DUBXpYQe3H7P&usqp=CAU",
          }}
        ></Image>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Request Help" color="green" />
        <Button title="More Details" color="green" />
      </View>
    </View>
  );
};

export default VolunteerCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "white",
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  descContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  desc: {
    width: "50%",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    marginVertical: 5,
    fontSize: 15,
  },
  buttonContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
