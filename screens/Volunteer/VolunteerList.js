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
import VolunteerCard from "../../components/VolunteerCard";

const VolunteerList = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Some Name");
  const [pin, setPin] = useState("751016");
  const [stores, setStores] = useState(null);

  const fetchApi = async () => {
    try {
      let data = await fetch(
        `https://obscure-tundra-86090.herokuapp.com/api/v1/volunteers/${pin}`
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
              Available Nearby Volunteers
            </Text>
            {stores ? (
              stores.map((el) => {
                return (
                  <VolunteerCard
                    name={el.name}
                    prof={el.proffession}
                    time={el.arrivesAt}
                    price={el.price}
                    key={el._id}
                  />
                );
              })
            ) : (
              <ActivityIndicator color="white" size={30} />
            )}
            {/* <VolunteerCard
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
            /> */}
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
