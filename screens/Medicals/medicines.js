import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import MedicalCard from "../../components/medicalCard";

const Medicines = (props) => {
  const [show, setShow] = useState(false);
  const [pin, setpin] = useState("750000");
  const [area, setArea] = useState("Basanta Vihar");
  const [medicine, setmedicine] = useState("Medicine");
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Input value={area} onChangeText={setArea}>
          area
        </Input>
        <Input value={pin} onChangeText={setpin}>
          pin
        </Input>
        <Input value={medicine} onChangeText={setmedicine}>
          medicine
        </Input>
        <Button onPress={() => setShow(true)}>search</Button>
        {show ? (
          <View style={styles.searchContainer}>
            <Text style={{ fontSize: 20, color: "white", marginVertical: 10 }}>
              Available Nearby Stores
            </Text>
            <MedicalCard
              title="Request Home Delivery"
              desc="Suraj Medicine Store, Basanta Vihar"
            />
            <MedicalCard
              title="Request Home Delivery"
              desc="Kansal Medicine Store, Basanta Vihar"
            />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Medicines;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "black",
  },
  searchContainer: {
    alignItems: "center",
  },
});
