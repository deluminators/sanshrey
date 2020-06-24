import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import Input from "../../components/input";
import Button from "../../components/CustomButton";
import MedicalCard from "../../components/medicalCard";

const Doctors = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [pin, setPin] = useState("760012");
  const [stores, setStores] = useState(null);

  const fetchApi = async () => {
    try {
      let data = await fetch(
        `http://192.168.43.206:3000/api/v1/medicals/doctors/${pin}`
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

        <Button
          onPress={() => {
            setShow(true);
            fetchApi();
            setStores(null);
          }}
        >
          search
        </Button>
        {show ? (
          <View style={styles.searchContainer}>
            <Text style={{ fontSize: 20, color: "white", marginVertical: 10 }}>
              Available Nearby Doctors
            </Text>

            {stores ? (
              stores.map((el) => {
                return (
                  <MedicalCard
                    title="Request Home Visit"
                    desc={`${el.name}, ${el.speciality}`}
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
