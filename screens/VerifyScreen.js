import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const VerifyScreen = (props) => {
  const travels = useSelector((state) => state.travel.travels);
  console.log(travels);
  return (
    <View style={styles.screen}>
      <Text style={{ color: "white", fontSize: 20, marginVertical: 20 }}>
        Request Ids
      </Text>
      {travels.map((el) => {
        return (
          <View
            key={el}
            style={{
              borderColor: "white",
              borderWidth: 1,
              padding: 5,
              width: "80%",
              alignItems: "center",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
              }}
            >
              {el}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>Pending</Text>
          </View>
        );
      })}
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});
