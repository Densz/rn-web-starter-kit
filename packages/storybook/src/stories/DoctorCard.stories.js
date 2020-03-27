import React from "react";
import { DoctorCard } from "@beys/components";

export default {
  title: "DoctorCard",
  component: DoctorCard
};

export const Text = () => (
  <DoctorCard
    name="Laurent Abcde"
    profession="Medecin traitant"
    address="76 avenue parmentier 75011 Paris"
  />
);
