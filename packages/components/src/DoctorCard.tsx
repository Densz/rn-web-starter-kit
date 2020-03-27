import React from "react";
import { View, Text, Image } from "react-native";
import useTheme from "./theme";

const DoctorCard = ({ name, profession, address }: any) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        minHeight: 120,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          marginRight: 10
        }}
      >
        <Image
          style={{
            borderRadius: 45,
            width: 45,
            height: 45
          }}
          source={{
            uri: "https://randomuser.me/api/portraits/men/97.jpg"
          }}
        ></Image>
      </View>

      <View
        style={{
          flex: 1
        }}
      >
        <Text
          style={{
            // fontFamily: "Metropolis",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 18,
            lineHeight: 18,
            marginBottom: 10
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            // fontFamily: "Metropolis",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 13,
            lineHeight: 13,
            marginBottom: 15
          }}
        >
          {profession}
        </Text>

        <Text
          style={{
            // fontFamily: "Metropolis",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 11,
            lineHeight: 11,
            color: "#0A0735",
            opacity: 0.5
          }}
        >
          {address}
        </Text>
      </View>
    </View>
  );
};

export default DoctorCard;
