import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import MedicalCard from "../../components/medicalCard";

const Diagnostics = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [area, setArea] = useState("Basanta Vihar");
  const [diagnostics, setDiagnostics] = useState("Heart");
  const [stores, setStores] = useState(null);
  const [pin, setPin] = useState("769012");

  const fetchApi = async () => {
    setStores(null);
    try {
      let data = await fetch(
        `https://obscure-tundra-86090.herokuapp.com/api/v1/medicals/diagnostics/${pin}`
      );
      data = await data.json();
      console.log(data.data);
      setStores(data.data.data);
    } catch (er) {
      console.log(er);
      Alert.alert("error", "check connection");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Input value={name} onChangeText={setName}>
          name
        </Input>
        <Input value={pin} onChangeText={setPin}>
          pin
        </Input>
        <Input value={diagnostics} onChangeText={setDiagnostics}>
          diagnostics
        </Input>
        <Button
          onPress={() => {
            setShow(true), fetchApi();
          }}
        >
          search
        </Button>

        {show ? (
          <View style={styles.searchContainer}>
            <Text style={{ fontSize: 20, color: "white", marginVertical: 10 }}>
              Available Diagnostics
            </Text>

            {stores ? (
              stores.map((el) => {
                return (
                  <MedicalCard
                    title="Request Home Visit"
                    desc={`${el.name}, ${el.diagnostics}`}
                    key={el._id}
                  />
                );
              })
            ) : (
              <ActivityIndicator color="white" size={30} />
            )}
            {/* <MedicalCard
              title="Request Home Visit"
              desc="Nirmal Diagnostics,Basanta Vihar"
            />
            <MedicalCard
              title="Request Home Visit"
              desc="FirstAid Diagnostics,Basanta Vihar"
            /> */}
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
