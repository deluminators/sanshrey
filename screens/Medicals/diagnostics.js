import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import MedicalCard from "../../components/medicalCard";

const Diagnostics = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [area, setArea] = useState("Basanta Vihar");
  const [diagnostics, setDiagnostics] = useState("Heart");
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Input value={name} onChangeText={setName}>
          name
        </Input>
        <Input value={area} onChangeText={setArea}>
          area
        </Input>
        <Input value={diagnostics} onChangeText={setDiagnostics}>
          diagnostics
        </Input>
        <Button onPress={() => setShow(true)}>search</Button>

        {show ? (
          <View style={styles.searchContainer}>
            <Text style={{ fontSize: 20, color: "white", marginVertical: 10 }}>
              Available Diagnostics
            </Text>
            <MedicalCard
              title="Request Home Visit"
              desc="Nirmal Diagnostics,Basanta Vihar"
            />
            <MedicalCard
              title="Request Home Visit"
              desc="FirstAid Diagnostics,Basanta Vihar"
            />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Diagnostics;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "black",
  },
  searchContainer: {
    alignItems: "center",
  },
});
