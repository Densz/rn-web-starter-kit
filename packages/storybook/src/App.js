import React from "react";
import { View } from "react-native";
import { Button, DoctorCard } from "@beys/components";

const App = () => {
  return (
    <View>
      <Button>Hello from web</Button>
      <DoctorCard
        name="Laurent Abcde"
        profession="Medecin traitant"
        address="76 avenue parmentier 75011 Paris"
      />
    </View>
  );
};

export default App;
