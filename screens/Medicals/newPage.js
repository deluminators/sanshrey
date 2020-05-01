import React, { useLayoutEffect } from "react";
import { Image, View } from "react-native";
import HeaderButton from "../../components/HeaderButton";

const NewPage = (props) => {
  if (!props.route.params) {
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
  }
  let path = null,
    el = (
      <Image
        source={require("../../assets/images/volunteerRegistration.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  if (!props.route.params) {
    el = (
      <Image
        source={require("../../assets/images/volunteerRegistration.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else if (props.route.params.title === "doctors") {
    path = "../../assets/images/doctors.jpeg";
    el = (
      <Image
        source={require("../../assets/images/doctors.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else if (props.route.params.title === "medicines") {
    path = "../../assets/images/medicines.jpeg";
    el = (
      <Image
        source={require("../../assets/images/medicines.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else if (props.route.params.title === "Register as Volunteer") {
    path = "../../assets/images/volunteerRegistration.jpeg";
    el = (
      <Image
        source={require("../../assets/images/volunteerRegistration.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else if (props.route.params.title === "Find Volunteer") {
    path = "../../assets/images/findVolunteers.jpeg";
    el = (
      <Image
        source={require("../../assets/images/findVolunteers.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else if (props.route.params.title === "List All") {
    path = "../../assets/images/listVolunteer.jpeg";
    el = (
      <Image
        source={require("../../assets/images/listVolunteer.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else if (props.route.params.title === "diagnostic") {
    path = "../../assets/images/diagnostics.jpeg";
    el = (
      <Image
        source={require("../../assets/images/diagnostics.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  } else {
    el = (
      <Image
        source={require("../../assets/images/volunteerRegistration.jpeg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
  return <View style={{ flex: 1 }}>{el}</View>;
};

export default NewPage;
