import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ paddingHorizontal: 8 }}>
      <Text>
        <Ionicons name={props.name} size={props.size} color={props.color} />
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
