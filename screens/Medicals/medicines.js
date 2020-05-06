import React, { useState } from "react";
import axios from "axios";
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

const Medicines = (props) => {
  const [show, setShow] = useState(false);
  const [pin, setpin] = useState("751029");
  const [area, setArea] = useState("Basanta Vihar");
  const [medicine, setmedicine] = useState("Medicine");
  const [stores, setStores] = useState(null);

  const fetchApi = async () => {
    setStores(null);
    try {
      let data = await fetch(
        `http://192.168.43.206:3000/api/v1/medicals/medicines/${pin}`
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
        <Input value={area} onChangeText={setArea}>
          area
        </Input>
        <Input value={pin} onChangeText={setpin}>
          pin
        </Input>
        <Input value={medicine} onChangeText={setmedicine}>
          medicine
        </Input>
        <Button
          onPress={() => {
            setShow(true);
            fetchApi();
          }}
        >
          search
        </Button>

        {show ? (
          <View style={styles.searchContainer}>
            <Text style={{ fontSize: 20, color: "white", marginVertical: 10 }}>
              Available Nearby Stores
            </Text>

            {stores ? (
              stores.map((el) => {
                return (
                  <MedicalCard
                    title="Request Home Delivery"
                    desc={`${el.name}, ${el.address.street}`}
                    key={el._id}
                  />
                );
              })
            ) : (
              <ActivityIndicator color="white" size={30} />
            )}
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
