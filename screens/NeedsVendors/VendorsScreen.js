import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../../components/HeaderButton";

const VendorsScreen = (props) => {
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
  return <View style={styles.screen}></View>;
};

export default VendorsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
