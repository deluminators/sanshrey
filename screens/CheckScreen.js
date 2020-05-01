import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "../components/input";

const CheckScreen = (props) => {
  const [ticket, setTicket] = useState("");
  return (
    <View style={styles.screen}>
      <Input value={ticket} onChangeText={setTicket}>
        ticket no.
      </Input>
      <View style={{ width: "60%", marginVertical: 20 }}>
        <Button
          title="check status"
          onPress={() => props.navigation.navigate("TravelDetails")}
          color="green"
        />
      </View>
    </View>
  );
};

export default CheckScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
  },
});
