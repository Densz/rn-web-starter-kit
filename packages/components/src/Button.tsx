import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ children }: { children: JSX.Element | string }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#012F2D",
          width: 300,
          height: 55,
          borderRadius: 16,
          borderWidth: 1
        }}
      >
        {typeof children === "string" ? (
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
