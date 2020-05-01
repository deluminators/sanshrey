import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import CustomButton from "../components/CustomButton";
import HeaderButton from "../components/HeaderButton";

const Filter = (props) => {
  return (
    <View style={styles.filter}>
      <Text style={styles.text}>{props.name}</Text>
      <Switch
        value={props.state}
        value={props.state}
        onValueChange={props.toggleSwitch}
        trackColor={{ true: "#4542f5" }}
        thumbColor={props.state ? "#4542f5" : ""}
      />
    </View>
  );
};

const JoinScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButton
            name="ios-menu"
            color="white"
            size={25}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        );
      },
    });
  });

  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <View style={styles.screen}>
      <Filter
        toggleSwitch={() => {
          setIsRegistered((prevState) => !prevState);
        }}
        name="Are you available as volunteer"
        state={isRegistered}
      />
      {isRegistered ? (
        <CustomButton
          style={{ marginBottom: 20, width: 300, alignItems: "center" }}
          onPress={() =>
            props.navigation.navigate("New", { title: "Register as Volunteer" })
          }
        >
          Register as Volunteer
        </CustomButton>
      ) : null}
      <CustomButton
        style={{ marginBottom: 20, width: 300, alignItems: "center" }}
        onPress={() =>
          props.navigation.navigate("New", { title: "Find Volunteer" })
        }
      >
        Find Volunteer
      </CustomButton>
      <CustomButton
        style={{ marginBottom: 20, width: 300, alignItems: "center" }}
        onPress={() => props.navigation.navigate("New", { title: "List All" })}
      >
        List All
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  filter: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  text: {
    fontSize: 20,
  },
});

export default JoinScreen;
