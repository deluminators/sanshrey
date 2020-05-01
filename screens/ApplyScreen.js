import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Input from "../components/input";
import { useDispatch } from "react-redux";
import { generateTravel } from "../store/actions/travel";

const ApplyScreen = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("Dummy Name");
  const [ticket, setTicket] = useState("ticketno");
  const [vehicle, setVehicle] = useState("vehicleno");
  const [currentAddress, setCurrentAddress] = useState("current address");
  const [permanentAddress, setPermanentAddress] = useState("permanent address");
  const [email, setEmail] = useState("email@gmail.com");
  const [mobile, setMobile] = useState("1234567891");
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Input value={ticket} onChangeText={setTicket}>
        ticket
      </Input>
      <Input type="name" value={name} onChangeText={setName}>
        name
      </Input>
      <Input value={vehicle} onChangeText={setVehicle}>
        vehicle
      </Input>
      <Input type="telephoneNumber" value={mobile} onChangeText={setMobile}>
        mobile
      </Input>
      <Input type="emailAddress" value={email} onChangeText={setEmail}>
        email
      </Input>
      <Input
        type="fullStreetAddress"
        value={currentAddress}
        onChangeText={setCurrentAddress}
      >
        location
      </Input>
      <Input
        type="fullStreetAddress"
        value={permanentAddress}
        onChangeText={setPermanentAddress}
      >
        destination
      </Input>
      <View style={{ width: "50%", marginTop: 20 }}>
        <Button
          color="green"
          title="submit"
          onPress={() => {
            const id = Date.now().toString();
            dispatch(generateTravel(id));
            Alert.alert(
              "Submitted travel request.",
              `Your request id is ${id}`,
              [{ text: "OK", onPress: () => props.navigation.goBack() }]
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ApplyScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "black",
  },
});
