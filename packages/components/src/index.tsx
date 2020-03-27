import React from "react";
import { View, Text } from "react-native";

const Button = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: 200
      }}
    >
      <View>
        <Text>Button from ethe mponents</Text>
      </View>
    </View>
  );
};

export default Button;
