import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import VolunteerCard from "../../components/VolunteerCard";

const VolunteerList = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [area, setArea] = useState("Location");
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Input value={name} onChangeText={setName}>
          name
        </Input>
        <Input value={area} onChangeText={setArea}>
          area
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

export default VolunteerList;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "black",
  },
  searchContainer: {
    alignItems: "center",
  },
});
