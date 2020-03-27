import React from "react";
import { View, Text } from "react-native";

const Button = ({ children }: { children: JSX.Element | string }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        marginTop: 100,
        width: 300,
        height: 300,
        borderColor: "black",
        borderWidth: 1
      }}
    >
      {typeof children === "string" ? (
        <Text style={{ color: "black" }}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

export default Button;
