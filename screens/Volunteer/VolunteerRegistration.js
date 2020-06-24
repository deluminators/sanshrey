import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";

const VolunteerRegistration = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [idType, setIdType] = useState("");
  const [idnum, setIdnum] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Input value={name} onChangeText={setName}>
        name
      </Input>
      <Input value={phone} onChangeText={setPhone}>
        phone
      </Input>
      <Input value={address} onChangeText={setAddress}>
        address
      </Input>
      {/* <Input value={address} onChangeText={setAddress}>
        address
      </Input> */}
      <Input value={idType} onChangeText={setIdType}>
        id type
      </Input>
      <Input value={idnum} onChangeText={setIdnum}>
        id no.
      </Input>
      <Button>SIGNUP</Button>
    </ScrollView>
  );
};

export default VolunteerRegistration;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});
