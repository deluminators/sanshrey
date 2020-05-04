import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import VolunteerCard from "../../components/VolunteerCard";

const FindVolunteers = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [phone, setPhone] = useState("1234567890");
  const [address, setAddress] = useState("street address");
  const [pin, setPin] = useState("123456");
  const style = !show ? { height: Dimensions.get("window").height } : null; //height: Dimensions.get(window).height
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
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
        <Input value={pin} onChangeText={setPin}>
          pin
        </Input>
        <Button onPress={() => setShow(true)}>search</Button>
        {show ? (
          <View style={styles.searchContainer}>
            <Text style={{ fontSize: 20, color: "white", marginVertical: 10 }}>
              Available Nearby Volunteers
            </Text>
            <VolunteerCard
              name="Hemanta Kumar"
              prof="House Help"
              time="5"
              price="100"
            />
            <VolunteerCard
              name="Narendra Kumar"
              prof="House Help"
              time="15"
              price="90"
            />
            <VolunteerCard
              name="Samntha Kumar"
              prof="Plumber"
              time="5"
              price="90"
            />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default FindVolunteers;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "black",
  },
  searchContainer: {
    alignItems: "center",
  },
});
