import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import MedicalCard from "../../components/medicalCard";

const Doctors = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [area, setArea] = useState("Basanta Vihar");

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
              Available Nearby Doctors
            </Text>
            <MedicalCard
              title="Request Home Visit"
              desc="Dr. B. K. Das (MD Medicine)"
            />
            <MedicalCard
              title="Request Home Visit"
              desc="Dr. G. Nayak (Eye Specialist)"
            />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "black",
  },
  searchContainer: {
    alignItems: "center",
  },
});
