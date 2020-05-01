import React from "react";
import { View, Text, Image } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: "80%", height: 300 }}
      />
    </View>
  );
};

export default LoadingScreen;
